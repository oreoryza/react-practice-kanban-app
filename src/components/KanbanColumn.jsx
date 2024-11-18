import React from "react";
import TaskCard from "./TaskCard";

const KanbanColumn = ({ title }) => (
  <div className="flex-1">
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <div className="space-y-4">
      <TaskCard />
      <TaskCard />
    </div>
  </div>
);

export default KanbanColumn;
