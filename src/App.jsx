import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddTaskModal from "./components/AddTaskModal";
import KanbanColumn from "./components/KanbanColumn";
import useDb from "./hooks/useDb";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const sessions = ["backlog", "onProgress", "done"];
  
  const data = sessions.reduce((acc, session) => {
    const { data: sessionData, deleteData } = useDb({ column: session });
    acc[session] = { data: sessionData, deleteData };
    return acc;
  }, {});

  const { postData } = useDb({ column: "backlog" });

  const [input, setInput] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    tag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postData(input);
    setInput({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      tag: "",
    });
    toggleModal()
  };

  const handleFetch = (e) => {
    e.preventDefault();
    fetchData();
  }

  const handleDelete = (session, id) => {
    data[session].deleteData(id);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Check if destination is valid
    if (!destination) {
      return;
    }

    // Check if the item was dropped in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Logic to move the task to a different column
    const taskId = data[source.droppableId].data[source.index].id;
    const newData = { ...data };

    // Remove the task from the source column
    const [movedTask] = newData[source.droppableId].data.splice(source.index, 1);
    
    // Add the task to the destination column
    newData[destination.droppableId].data.splice(destination.index, 0, movedTask);

    // Update the state or however you manage your data
    // You might need to implement a way to set the new state here
  };

  return (
    <div>
      <Navbar onClick={toggleModal} />
      <AddTaskModal input={input} showModal={showModal} onClick={toggleModal} onSubmit={handleSubmit} onChange={handleChange} fetch={handleFetch} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="p-4">
          <div className="flex space-x-4">
            {sessions.map(session => (
              <Droppable key={session} droppableId={session}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex-1"
                  >
                    <KanbanColumn 
                      data={data[session].data} 
                      onClick={(id) => handleDelete(session, id)} 
                      session={session} 
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default App;