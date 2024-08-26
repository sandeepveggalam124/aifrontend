import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Switch,
  Box,
  IconButton,
  Modal,
  TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CheckIcon from '@mui/icons-material/Check';

const SubscriptionPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCancel, setIsModalCancel] = useState(false);

  const handleClick = () => {
    console.log("Button clicked!");
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    console.log("saved successfully");
    setIsModalOpen(false);
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  const plans = [
    {
      title: "Lite (Recommended)",
      price: "₹100/Monthly",
      d1: "Free for ever when you host with Debbi.",
      d2: "free for freelancers with Client Billing",
      features: [
        "2 Projects",
        "Client Billing",
        "Free Staging",
        "Code Export",
        "White labeling",
        "Site password protection",
      ],
      current: false,
    },
    {
      title: "Lite (Recommended)",
      price: "₹100/Monthly",
      d1: "Free for ever when you host with Debbi.",
      d2: "free for freelancers with Client Billing",
      features: [
        "2 Projects",
        "Client Billing",
        "Free Staging",
        "Code Export",
        "White labeling",
        "Site password protection",
      ],
      current: false,
    },
    {
      title: "Lite (Recommended)",
      price: "₹100/Monthly",
      d1: "Free for ever when you host with Debbi.",
      d2: "free for freelancers with Client Billing",
      features: [
        "2 Projects",
        "Client Billing",
        "Free Staging",
        "Code Export",
        "White labeling",
        "Site password protection",
      ],
      current: false,
    },
  ];
  return (
    <div
      style={{
        height: "calc(100% - 6%)",
        // width: "100%",
        overflow: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "thin", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer
        scrollbarColor: "transparent transparent", // For Firefox
        "&::webkitScrollbar": {
          width: "5px", // Width of the scrollbar
          height: "5px", // Height of the scrollbar
        },
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5" color="white">Your Plan</Typography>
          {/* <Button variant="contained" sx={{ backgroundColor: "#FF6600" }}>
          Customize Subscription
        </Button> */}
        </Box>
        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={2} sx={{ padding: "16px", borderRadius: "15px" }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    color={plan.current ? "primary" : "textPrimary"}
                    sx={{ color: "black" }}
                  >
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{ marginBottom: "15px" }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#04C600",
                          borderRadius: "20px",
                          pl: "10px",
                          pr: "10px",
                          pt: "4px",
                          pb: "3px",
                        }}
                      >
                        Current Plans
                      </Button>
                    </Stack>
                    {plan.title}
                  </Typography>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Box>
                <Typography variant="h4" sx={{ color: "black" }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  {plan.d1}
                </Typography>
                <Typography variant="body2" sx={{ color: "black" }}>
                  {plan.d2}
                </Typography>
                <Box mt={4}>
                  {plan.features.map((feature, idx) => (
                    <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckIcon sx={{ marginRight: "5px", color: 'purple' }} />
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <Box
                  mt={4}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#9747FF",
                      borderRadius: "20px",
                      pl: "50px",
                      pr: "50px",
                      pt: "4px",
                      pb: "3px",
                    }}
                  >
                    Select
                  </Button>
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Button variant="contained" sx={{ backgroundColor: "#FF6600", mt: "25px", ml: "38%" }} alignItems="center"
            onClick={handleClick}>
            Customize Subscription
          </Button>
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
        </Box>
      </Container>
    </div>
  );
};

export default SubscriptionPlan;