import React from "react";

const ViewModal = ({ isOpen, onClose, title }) => {
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
                            <label className="aa" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Candidate Name</label>
                            <input type="text" className="form-control form-control-sm" placeholder="#005" aria-label="User ID"
                                style={{ border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label className=" " for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Candidate ID</label>
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label className=" " for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Applied Position</label>
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                    </div>

                    <div class="row" style={{ margin: "0% 2%" }}>
                       
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Interview Date</label>
                            <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Questions Answered</label>
                            <input type="text" className="form-control form-control-sm" placeholder="Last Name" aria-label="Last Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Skill Percentage</label>
                            <input type="text" className="form-control form-control-sm" placeholder="Last Name" aria-label="Last Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                    </div>

                    <div class="row " style={{ margin: "0% 2%" }}>
                        <div class="col-sm-4">
                            <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Analytics Percentage</label>
                            <input type="text" className="form-control form-control-sm" placeholder="#005" aria-label="User ID"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Team Player Percentage</label>
                            <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>Communication</label>
                            <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                    </div>

                    <div class="row " style={{ margin: "0% 2%" }}>
                        <div class="col-sm-4">
                            <label for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>PAN Number</label>
                            <input type="text" className="form-control form-control-sm" placeholder="#005" aria-label="User ID"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>View Audio</label>
                            <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                        <div class="col-sm-4">
                            <label class="visually-shown" for="specificSizeInputName" style={{ fontFamily: "poppins", fontSize: "12px", color: "#1E1E1E", }}>View Video</label>
                            <input type="text" className="form-control form-control-sm" placeholder="First Name" aria-label="First Name"
                                style={{ backgroundColor: "#1E1E1E", color: "white", border: "none" }} />
                        </div>
                    </div>

                    <div class="row " style={{ margin: "0% 2%" }}>
                        <div class="col-sm-4">
                            <button
                                type="button"
                                className="btn btn-sm rounded-2 fw-medium"
                                onClick={onClose}
                                style={{margin:"10% 5%",color: "#1E1E1E", width: "45%", backgroundColor:"#04C600" }}
                            >
                                Accept
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm rounded-2 fw-medium"
                                onClick={onClose}
                                style={{ margin:"10% 0%",color: "#1E1E1E", width: "45%",backgroundColor:"#EE2F2F" }}
                            >
                                Reject
                            </button>
                        </div>
                        <div class="col-sm-4">
                            <button
                                type="button"
                                className="btn btn-sm rounded-2 fw-medium"
                                onClick={onClose}
                                style={{margin:"10% 0%", color: "#1E1E1E", width: "100%", border: "1px solid #1E1E1E" }}
                            >
                                Cancel
                            </button>
                        </div>

                        <div class="col-sm-4">
                            <button
                                type="button"
                                className="btn btn-sm rounded-2 fw-medium"
                                onClick={onClose}
                                style={{ margin:"10% 0%",color: "#CECECE", width: "100%", border: "1px solid #1E1E1E",backgroundColor:"#1E1E1E "}}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;