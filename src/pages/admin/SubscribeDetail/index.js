import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
// import { light } from "@mui/material/styles/createPalette";
// import FormControl from "@mui/material/FormControl";

const SubscribeDetail = ({ onOpenSubscriptionPlan }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  // const [isErrorOpen, setIsErrorOpen] = useState(false);
  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const currentDate = new Date().toISOString().split("T")[0];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenSubscriptionPlan = () => {
    onOpenSubscriptionPlan();   // called the function passed from AdminLandingpage
  };

  const handleModalClose = () => {
    console.log("saved successfully");
    setIsModalOpen(false);
  };

  const handleClear = () => {
    console.log("Clear button clicked");
    setIsModalOpen(false);
    
  };
  const handleClickSubscription = () => {
    setIsModalVisible(true);
  };

  const handleCloseCancelSubscriptionModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div >
      <table style={{ width: "100%", textAlign: "left" }}>
        <tbody>
          <tr>
            <td>
              <h4>Subscribe Details</h4>
            </td>
            <td>
              <h5>
                Total Billing amount:&#8377;
                <span style={{ color: "#008000", fontWeight: "bold" }}>
                  1,10,500
                </span>
              </h5>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h2 style={{ marginTop: "1px" }}>Pavan Dhananjaya</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="row" style={{ fontWeight: "bold", marginTop: "1px" }}>
        <div className="col">
          Plan:{" "}
          <span style={{ color: "#9747FF", fontWeight: "bold" }}>Pro</span>
        </div>
        <div className="col">
          Billing Period:{" "}
          <span style={{ color: "#008000", fontWeight: "bold" }}>Monthly</span>
        </div>
        <div className="col">
          Subscription amount: &#8377;
          <span style={{ color: "#008000", fontWeight: "bold" }}>500</span>
        </div>
      </div>
      <br />
      <div
        className="container"
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        <div className="row">
          <table
            style={{
              borderTop: "2px dashed white",
              borderBottom: "2px dashed white",
              paddingTop: 30,
              paddingBottom: 30,
              width: "100%",
              textAlign: "left",
            }}
          >
            <tbody>
              <tr
                style={{
                  borderBottom: "2px dashed white",
                  marginBottom: "10px",
                }}
              >
                <td style={{ padding: "10px 0" }}>Start Date</td>
                <td style={{ padding: "10px 0" }}>End Date</td>
              </tr>
              <tr
                style={{
                  borderBottom: "2px dashed white",
                  paddingBottom: "10px",
                }}
              >
                <td style={{ padding: "10px 0" }}>Payment Method: Card</td>
                <td style={{ padding: "10px 0" }}>
                  Billing Status:
                  <span style={{ color: "#008000", fontWeight: "bold" }}>
                    {" "}
                    Paid
                  </span>
                </td>
              </tr>
              <tr
                style={{
                  borderBottom: "2px dashed white",
                  paddingBottom: "10px",
                }}
              >
                <td style={{ padding: "10px 0" }}>Auto-renewal: Off</td>
                <td style={{ padding: "10px 0" }}>User Limits:</td>
              </tr>
              <tr
                style={{
                  borderBottom: "2px dashed white",
                  paddingBottom: "10px",
                }}
              >
                <td style={{ padding: "10px 0" }}>
                  Invoice History:{" "}
                  <span
                    style={{
                      color: "#9747FF",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Click here to download
                  </span>
                </td>
                <td style={{ padding: "10px 0" }}>
                  Discounts/Promotions: None
                </td>
              </tr>
              <tr
                style={{
                  borderBottom: "2px dashed white",
                  paddingBottom: "10px",
                }}
              >
                <td style={{ padding: "10px 0" }}>Upgrade/Downgrade</td>
                <td style={{ padding: "10px 0" }}>
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{ fontWeight: "bold" }}
                    onClick={handleOpenSubscriptionPlan}
                  >
                    Change Plan
                  </button>
                </td>
              </tr>
              <tr
                style={{
                  borderBottom: "2px dashed white",
                  paddingBottom: "10px",
                }}
              >
                <td style={{ padding: "10px 0" }}>Cancellation Reason: None</td>
                <td style={{ padding: "10px 0" }}>
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{ fontWeight: "bold" }}
                    onClick={handleClickSubscription}
                  >
                    Cancel Subscription
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="AddPlanContainer" style={{ display: "flex" }}>
            <div>
              <Typography variant="h5" component="h2" sx={{ color: "#000000" }}>
                <strong>Add Plan</strong>
              </Typography>
              <Typography sx={{ mt: 2, color: "text.primary" }}>
                Add plan. This will not affect existing subscription.
              </Typography>
            </div>
            <div className="select" style={{ marginTop: "40px" }}>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>


          <div>
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              sx={{
                marginTop: "auto",
                alignItems: "center",
                borderRadius: "10px",
                padding: "1% 10%",
              }}
            >
              <Box
                gridColumn="span 6"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="Plan Name"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "95%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 6"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="Number of Users"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "95%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>

              <Box
                gridColumn="span 12"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="Features"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "98%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 6"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="Monthly Price"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "95%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 6"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="Annual Price"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "95%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 6"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="Start Date"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "95%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>
              <Box
                gridColumn="span 6"
                sx={{
                  marginTop: "auto",
                  textAlign: "left",
                  marginBottom: "2%",
                }}
              >
                <TextField
                  label="End Date"
                  id="custom-css-outlined-input"
                  size="small"
                  sx={{
                    width: "95%",
                    "& .MuiInputLabel-root": { color: "#000" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#000" },
                      "&:hover fieldset": { borderColor: "#333" },
                      "&.Mui-focused fieldset": { borderColor: "#000" },
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </Box>
            </Box>
          </div>
          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <Button
              variant="contained"
              class="btn btn-dark btn-sm"
              onClick={handleModalClose}
              sx={{ marginRight: "1rem" }}
            >
              Clear
            </Button>
            <Button
              variant="contained"
              class="btn btn-dark btn-sm"
              onClick={handleModalClose}
              sx={{ marginRight: "1rem" }}
            >
              Save
            </Button>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
              <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal open={isModalVisible} onClose={handleCloseCancelSubscriptionModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div >
            <Typography variant="h5" component="h2" sx={{ color: "black ! important" }}>
              <strong>Cancel Subscription</strong>
            </Typography>
            <Typography sx={{ mt: 2, color: "text.primary" }}>
              We're sorry to see you go! we'd appreciate it if you could let us
              know why you're cancelling
            </Typography>
            <Typography sx={{ mt: 2, color: "text.primary" }}>
              <b>Reason For Cancelling</b>
            </Typography>
          </div>

          <div class="row">
            <div class="col-lg-6" >
              <div className="form-check" style={{ border: "2px solid black" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ border: "2px solid black" }}
                />
                <label className="form-check-label" for="flexRadioDefault1" style={{ color: "black" }}>
                  I dont use the service
                </label>
              </div>
              <br />
              <div className="form-check" style={{ border: "2px solid black" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ border: "2px solid black" }}
                />
                <label className="form-check-label" for="flexRadioDefault1" style={{ color: "black" }}>
                  The product doesnt meet my needs
                </label>
              </div>
              <br />
              <div className="form-check" style={{ border: "2px solid black" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ border: "2px solid black" }}
                />
                <label className="form-check-label" for="flexRadioDefault1" style={{ color: "black" }}>
                  The product is too expensive
                </label>
              </div>
              <br />
              <div className="form-check" style={{ border: "2px solid black" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ border: "2px solid black" }}
                />
                <label className="form-check-label" for="flexRadioDefault1" style={{ color: "black" }}>
                  I'm switching to a cpmp[etitor]
                </label>
              </div>
              <br />
              <div className="form-check" style={{ border: "2px solid black" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ border: "2px solid black" }}
                />
                <label className="form-check-label" for="flexRadioDefault1" style={{ color: "black" }}>
                  Othere
                </label>
              </div>
            </div>

            <div class="col-lg-6">
              <div className="float-left">
                <div className="form-check">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px", color: "light" }}
                    ></textarea>
                    <label for="floatingTextarea2">Feedback</label>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "right", marginTop: "1rem" }}>
                <Button
                  variant="contained"
                  class="btn btn-outline-dark btn-sm"
                  onClick={handleClear}
                  sx={{ marginRight: "1rem" }}
                >
                  Cancel subscription
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SubscribeDetail;


