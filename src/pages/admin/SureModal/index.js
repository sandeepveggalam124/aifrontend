import React from "react";

const SureModal = ({ isOpen, onClose,onConfirm, title }) => {
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
              Are you fine to Deactivate {title} <br />
            </span>
          </div>
          <div className="modal-footer d-flex flex-column justify-content-center border-0">
            <button
              type="button"
              className="btn rounded-2 fw-medium w-50"
              onClick={onConfirm}
              style={{ backgroundColor: "#1E1E1E", color: "#E8E8E8" }}
            >
              Deactivate {title}
            </button>
            <button
              type="button"
              className="btn rounded-2 fw-medium w-50"
              onClick={onClose}
              style={{ backgroundColor: "#FEFEFE", color: "#1E1E1E" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SureModal;