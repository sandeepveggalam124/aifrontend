import React from "react";
import "./index.css"

const AddNewUser = ({ isOpen, onClose, title }) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered w-50">
        <div className="modal-content" style={{ backgroundColor: "#A7A7A7" }}>
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div class="row" style={{ margin: "0% 2%" }}>
            <div class="col-sm-4" >
              <label className="aa" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>User ID</label>
              <input type="text" className="form-control form-control-sm" placeholder="#005" aria-label="User ID"
                style={{ border: "none" }} />
            </div>
            <div class="col-sm-8">
              <label className=" " for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Full Name</label>
              <input type="text" className="form-control form-control-sm" placeholder="Enter Name" aria-label="First Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
          </div>

          <div class="row" style={{ margin: "0% 2%" }}>
            <div class="col-sm-4">
              <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Gender</label>
              <select class="form-select form-select-sm" aria-label="Small select example" style={{backgroundColor:"#1E1E1E", color:"white", border: "none"}}>
                <option selected>Select Gender</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Email ID</label>
              <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Mobile</label>
              <input type="text" className="form-control form-control-sm" placeholder="Last Name" aria-label="Last Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
          </div>

          <div class="row " style={{ margin: "0% 2%" }}>
            <div class="col-sm-4">
              <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Date of Birth</label>
              <input type="text" className="form-control form-control-sm" placeholder="#005" aria-label="User ID"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
            <div class="col-sm-8">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Address</label>
              <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
          </div>

          <div class="row " style={{ margin: "0% 2%" }}>
            <div class="col-sm-4">
              <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>State</label>
                <select class="form-select form-select-sm" aria-label="Small select example" style={{backgroundColor:"#1E1E1E", color:"white", border: "none"}}>
                <option selected>Select State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>City</label>
                <select class="form-select form-select-sm" aria-label="Small select example" style={{backgroundColor:"#1E1E1E", color:"white", border: "none"}}>
                <option selected>Select City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Department</label>
                <select class="form-select form-select-sm" aria-label="Small select example" style={{backgroundColor:"#1E1E1E", color:"white", border: "none"}}>
                <option selected>Select Department</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="row " style={{ margin: "0% 2%" }}>
            <div class="col-sm-4">
              <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Aadhar Number</label>
              <input type="text" className="form-control form-control-sm" placeholder="#005" aria-label="User ID"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>PAN Number</label>
              <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Joining Date</label>
              <input type="text" className="form-control form-control-sm" placeholder="Last Name" aria-label="Last Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
          </div>

          <div class="row " style={{ margin: "0% 2%" }}>
            <div class="col-sm-4">
              <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Role</label>
                <select class="form-select form-select-sm" aria-label="Small select example" style={{backgroundColor:"#1E1E1E", color:"white", border: "none"}}>
                <option selected>Select Role</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-sm-4">
              <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#E8E8E8", }}>Password</label>
              <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
            </div>
          </div>

          <div className="modal-footer d-flex flex-row justify-content-right border-0">
            <button
              type="button"
              className="btn btn-sm rounded-2 fw-medium"
              onClick={onClose}
              style={{ color: "#1E1E1E", width: "120px", border: "1px solid #1E1E1E" }}
            >
              Clear
            </button>
            <button
              type="button"
              className="btn btn-sm rounded-2 fw-medium "
              onClick={onClose}
              style={{ backgroundColor: "#1E1E1E", color: "#E8E8E8", width: "120px" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUser;

