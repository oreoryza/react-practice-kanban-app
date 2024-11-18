import React from "react";
import Navbar from "./components/Navbar";
import AddTaskModal from "./components/AddTaskModal";
import KanbanColumn from "./components/KanbanColumn";

const App = () => (
  <div>
    <Navbar />
    <AddTaskModal />
    <div className="p-4">
      <div className="flex space-x-4">
        <KanbanColumn title="Backlog" />
        <KanbanColumn title="On Progress" />
        <KanbanColumn title="Done" />
      </div>
    </div>
  </div>
);

export default App;
