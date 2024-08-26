import React, { useState } from "react";
import SureModal from "../SureModal";

const Modal = ({ isOpen, onClose, title }) => {
  const [sureModalOpen, setSureModalOpen] = useState(false); // State to manage SureModal visibility

  // Function to handle opening SureModal
  const openSureModal = () => {
    onClose(); // Close the current modal
    setSureModalOpen(true); // Open the SureModal
  };
  return (
    <>
      <div
        className={`modal fade ${isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#A7A7A7" }}>
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" style={{ color: "#1E1E1E" }}>
                Deactivate The {title}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <span className="fw-normal" style={{ color: "#1E1E1E" }}>
                Are you sure you want to deactivate the {title}? <br />
                <div style={{ marginBottom: "10px" }}></div>
                Deactivating a {title} will immediately suspend all related
                users and resources. This action is irreversible.
              </span>
            </div>
            <div className="modal-footer d-flex flex-column justify-content-center border-0">
              <button
                type="button"
                className="btn rounded-2 fw-medium w-50"
                style={{ backgroundColor: "#1E1E1E", color: "#E8E8E8" }}
                onClick={openSureModal} // Open SureModal on click
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
      <SureModal
        isOpen={sureModalOpen}
        onClose={() => setSureModalOpen(false)}
        title={title}
      />
    </>
  );
};

export default Modal;