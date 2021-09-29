import React, { useState } from "react";

function Modal() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };
  return (
    <div className="modal" id="modal">
      <div className="modal-container">
        <div className="modal-head">
          <h2>Add new holiday</h2>
          <i class="fas fa-times" onClick={() => closeModal()}></i>
        </div>

        <div className="main-modal-section">
          <div className="left-modal-section">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <span>Date</span>
            <input
              type="text"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <img src="/Assets/calender2.svg" alt="" />
            <span>Type</span>
            <select name="type" id="type">
              <option value="Optional">Optional</option>
            </select>
          </div>
          <div className="right-modal-section">
            <p>
              Download Sample in <span>.csv format</span> file to ensure that
              you have that correct file ready to import.
            </p>
            <div className="import">
              <img src="/Assets/file.svg" alt="" />
              <p>Drag and drop CSV File</p>
              <p>
                or <a href="">Click here</a> to upload
              </p>
            </div>
          </div>
        </div>
        <button onCLick={() => {}}>Save</button>
      </div>
    </div>
  );
}

export default Modal;
