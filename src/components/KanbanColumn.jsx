import React from "react";
import TaskCard from "./TaskCard";
import { Draggable } from "react-beautiful-dnd";

function KanbanColumn({ session, data, onClick }) {
  const sessionTitle = () => {
    if (session === "backlog") {
      return "Backlog";
    } else if (session === "onProgress") {
      return "On Progress";
    } else if (session === "done") {
      return "Done";
    }
  };

  return (
    <div className="flex-1 border p-4 m-2 rounded-lg min-h-screen">
      <h3 className="text-xl font-bold mb-4 w-full border-b py-2">{sessionTitle()}</h3>
      <div className="space-y-4">
        {data.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <TaskCard
                  title={task.title}
                  description={task.description}
                  tag={task.tag}
                  startDate={task.startDate}
                  endDate={task.endDate}
                  onClick={() => onClick(task.id)}
                />
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default KanbanColumn;