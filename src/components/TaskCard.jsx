import React from "react";

const TaskCard = () => (
  <div className="card bg-base-100 shadow-md">
    <div className="card-body">
      <h2 className="card-title">Sample Task</h2>
      <p>Sample description for this task.</p>
      <div className="badge badge-outline">Development</div>
      <div className="text-sm text-gray-500 mt-2">2024-11-18 - 2024-11-25</div>
    </div>
  </div>
);

export default TaskCard;
