import React from "react";

const SavedModal = ({ isOpen, onClose, title }) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ backgroundColor: "#A7A7A7" }}>
          <div className="modal-body text-center">
            <span className="fw-normal" style={{ color: "#1E1E1E" }}>
              Job Described Saved {title} <br />
            </span>
          </div>
          <div className="modal-body">
              <span className="fw-normal" style={{ color: "#1E1E1E" }}>
              You have successfully added the Job Description.
              </span>
            </div>
          <div className="modal-footer d-flex flex-column justify-content-center border-0">
            <button
              type="button"
              className="btn rounded-2 fw-medium w-50"
              onClick={onClose}
              style={{ backgroundColor: "#FEFEFE", color: "#1E1E1E" }}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedModal;