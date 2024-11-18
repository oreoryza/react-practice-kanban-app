import React from "react";

const Navbar = ({ onClick }) => (
  <div className="navbar bg-base-100 shadow-lg">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Kanban App</a>
    </div>
    <div className="flex-none">
      <button onClick={onClick} className="btn btn-primary">
        Add Task
      </button>
    </div>
  </div>
);

export default Navbar;
