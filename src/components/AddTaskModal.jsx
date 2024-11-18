import React from "react";

const AddTaskModal = () => (
  <div className="modal modal-open">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Add Task</h3>
      <div className="form-control">
        <label className="label">Title</label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">Description</label>
        <textarea className="textarea textarea-bordered" />
      </div>
      <div className="form-control">
        <label className="label">Start Date</label>
        <input type="date" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">End Date</label>
        <input type="date" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">Tag</label>
        <select className="select select-bordered">
          <option>Development</option>
          <option>Testing</option>
          <option>Design</option>
        </select>
      </div>
      <div className="modal-action">
        <button className="btn">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
);

export default AddTaskModal;
