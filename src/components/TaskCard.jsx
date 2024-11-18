import React from "react";

function TaskCard({title, description, tag, startDate, endDate, onClick}) {
  return (
  <div className="group hover:bg-white/[.6] hover:text-black active:bg-white/[.6] active:text-black card bg-base-100 border shadow-md">
    <div className="card-body">
      <div className="flex justify-between items-center">
      <h2 className="card-title">{title}</h2>
      <button onClick={onClick} className="text-red-500 hidden group-hover:flex"><i class="bi bi-trash border p-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white"></i></button>
      </div>
      <p>{description}</p>
      <div className="badge badge-outline">{tag}</div>
      <div className="text-sm text-gray-500 mt-2">{startDate} - {endDate}</div>
    </div>
  </div>
  )
};

export default TaskCard;
