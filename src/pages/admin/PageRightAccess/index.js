import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PageRightsAccess = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
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
        "&::-webkit-scrollbar": {
          width: "5px", // Width of the scrollbar
          height: "5px", // Height of the scrollbar
        },
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          marginTop: "30px",
          alignItems: "center",
          borderRadius: "10px",
          //   backgroundColor: "blue",
        }}
      >
        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left" }}>
          <FormControl sx={{ minWidth: 300 }} size="small">
            <InputLabel id="demo-simple-select-label">Select User</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City Name"
              onChange={handleChange1}
            >
              <MenuItem>Vijayawada</MenuItem>
              <MenuItem>Hyderabad</MenuItem>
              <MenuItem>Delhi</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box gridColumn="span 1" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Button
            sx={{
              color: "#A7A7A7",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              fontFamily: "poppins",
              backgroundColor: "#000",
            }}
          >
            Save
          </Button>
        </Box>

        <Box
          gridColumn="span 2"
          sx={{ marginTop: "auto", textAlign: "left", marginLeft: "10%" }}
        >
          <Button
            sx={{
              background: "#9747FF",
              color: "#A7A7A7",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              fontFamily: "poppins",
            }}
          >
            <Typography sx={{ fontFamily: "poppins" }}>Reset</Typography>
          </Button>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Admin Dashboard
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Admin Master
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Department Management-CRUD
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Area Management-CRUD
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#A7A7A7",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            State Management
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#A7A7A7",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            City Management
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Industry Sector Management-CRUD
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Roles Management
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Role ID
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            User Management
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Display the List of Users
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Page Right Access
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#A7A7A7",
              fontSize: "18px",
              fontFamily: "poppins",
              paddingLeft: "10px",
              textAlign: "left",
              //   width: "91%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#000",
              borderRadius: "10px",
            }}
          >
            Register Organization
          </Typography>
        </Box>
        <Box gridColumn="span 12">
          <Grid container spacing={4} sx={{ ml: "2px", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#A7A7A7",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            Add Oragization
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#A7A7A7",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            List Oragization
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#E8E8E8",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#9747FF",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            Dashboard
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#E8E8E8",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#9747FF",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            Job Description
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#E8E8E8",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#9747FF",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            Interview Slots
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "2%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#E8E8E8",
              fontSize: "18px",
              fontFamily: "poppins",
              textAlign: "left",
              //   width: "86%",
              //   height: "3%",
              padding: "6px 45px",
              background: "#9747FF",
              borderRadius: "10px",
              marginLeft: "45px",
            }}
          >
            Candidate Resume
          </Typography>
        </Box>
        <Box gridColumn="span 11">
          <Grid container spacing={4} sx={{ ml: "5%", mt: 0 }}>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Add</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Edit</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>Delete</Typography>
            </Grid>
            <Grid container item xs={3} direction="row" alignItems="center">
              <Checkbox />
              <Typography>View</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
export default PageRightsAccess;