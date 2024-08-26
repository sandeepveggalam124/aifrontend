import * as React from "react";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { LineChart } from "@mui/x-charts/LineChart";
import { CapitalizeName } from "../../../utils/capitalizeName";
import { LoginContext } from "../../../contexts/loginContext";

const AdminDashboard = () => {
  const { isLoggedIn, user: name, logout } = React.useContext(LoginContext);
  const userName = CapitalizeName(name);
  const CssTextField = styled(TextField)({
    "& label": {
      color: "#FEFEFE",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B9B9B9",
        borderRadius: 10,
      },
      "&:hover fieldset": {
        borderColor: "#B9B9B9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B9B9B9",
      },
      "& .MuiInputBase-input": {
        color: "#FEFEFE",
      },
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [alignment, setAlignment] = React.useState("Admin Portal");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const adminPortalStyle = {
    backgroundColor: alignment === "Admin Portal" ? "black" : "#959595",
    color: alignment === "Admin Portal" ? "white" : "black",
  };

  const organizationPortalStyle = {
    backgroundColor: alignment === "Organisation Portal" ? "black" : "#959595",
    color: alignment === "Organisation Portal" ? "white" : "black",
  };

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "25px",
                color: "#FFFFFF",
                pt: "20px",
                pl: "15px",
              }}
            >
              Welcome to the Admin Dashboard {userName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "15px",
                color: "#FFFFFF",
                pt: "20px",
                pl: "15px",
              }}
            >
              Candidate interview Feedback
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "poppins",
                color: "#FFFFFF",
                pt: "20px",
                textAlign: "center",
              }}
            >
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{ width:"500px",marginLeft:"70px"}}
              >
                <ToggleButton
                  className="adminportal"
                  value="Admin Portal"
                  style={adminPortalStyle}
                  sx={{ pl:"30px",pr:"30px"}}
                >
                  <strong>Admin Portal</strong>
                </ToggleButton>
                <ToggleButton
                  className="organizationportal"
                  value="Organisation Portal"
                  style={organizationPortalStyle}
                  sx={{ pl:"30px",pr:"30px"}}
                >
                  <strong>Organisation Portal</strong>
                </ToggleButton>
              </ToggleButtonGroup>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%", marginTop: "30px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Average Rating
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                4.5
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Total feedbacks
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                200
              </Typography>
            </Item>
          </Grid>
        </Grid>

        <Box sx={{ width: "99%", height: "200%", marginTop: "30px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item
                sx={{
                  background: alpha("#B9B9B9", 0.2),
                  height: "300PX",
                  textAlign: "left",
                  m: 2,
                  borderRadius: "10px",
                  border: "2px solid black",
                }}
              >
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      area: true,
                    },
                  ]}
                  width={1000}
                  height={300}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "15px",
                color: "#FFFFFF",
                pt: "10px",
                pl: "15px",
                marginLeft: "10PX",
              }}
            >
              Organisation Count
            </Typography>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Average Rating
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                4.5
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Total feedbacks
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                200
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "15px",
                color: "#FFFFFF",
                pt: "10px",
                pl: "15px",
                marginLeft: "10PX",
              }}
            >
              Total Companies
            </Typography>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Average Rating
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                4.5
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Total feedbacks
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                200
              </Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: "15px",
                color: "#FFFFFF",
                pt: "10px",
                pl: "15px",
                marginLeft: "10PX",
              }}
            >
              Total Colleges
            </Typography>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Average Rating
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                4.5
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sx={{ marginBottom: "50px" }}>
            <Item
              sx={{
                background: alpha("#B9B9B9", 0.2),
                textAlign: "left",
                width: "93%",
                m: 2,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "28px",
                  color: "#B9B9B9",
                  pt: "10px",
                  pl: "15px",
                }}
              >
                Total feedbacks
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "40px",
                  color: "#B9B9B9",
                  pl: "15px",
                }}
              >
                200
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashboard;
