import React from "react";

function AddTaskModal({ showModal, onClick, input, onChange, onSubmit }) {

  return (
    <>
      {showModal && (
        <div className="modal modal-open">
          <form onSubmit={onSubmit} className="modal-box">
            <h3 className="font-bold text-lg">Add Task</h3>
            <div className="form-control">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={onChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Description</label>
              <textarea
                name="description"
                value={input.description}
                onChange={onChange}
                className="textarea textarea-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={input.startDate}
                onChange={onChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">End Date</label>
              <input
                type="date"
                name="endDate"
                value={input.endDate}
                onChange={onChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">Tag</label>
              <select
                name="tag"
                value={input.tag}
                onChange={onChange}
                className="select select-bordered"
              >
                <option>Development</option>
                <option>Testing</option>
                <option>Design</option>
              </select>
            </div>
            <div className="fixed top-0 right-10 modal-action">
              <button onClick={onClick} className="btn">
                Cancel
              </button>
              <button className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AddTaskModal;
