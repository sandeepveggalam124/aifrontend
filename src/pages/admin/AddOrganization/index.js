import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Button, TablePagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import Checkbox from '@mui/material/Checkbox';
import moment from "moment";
import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddOrganization = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const currentDate = moment().format("MM/DD/YYYY");

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#B9B9B9',
    },
    '& label': {
      color: '#FEFEFE',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B9B9B9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#B9B9B9',
        borderRadius: 10,
        
      },
      '&:hover fieldset': {
        borderColor: '#B9B9B9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#B9B9B9',
      },
      '& .MuiInputBase-input': { // Add this line
        color: '#FEFEFE', // Change the color here
      },
    },
  });

  const CssFormControl = styled(FormControl)({
    '& label': {
      color: '#FEFEFE',
      '&.Mui-focused': {
        color: '#B9B9B9',
      },
    },
    '& .MuiInputBase-root': {
      color: '#FF0000',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#B9B9B9',
        borderRadius: 10,

      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#B9B9B9',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#B9B9B9',
      },
    },
  });

  const CssSelect = styled(Select)({
    '& .MuiSvgIcon-root': {
      color: '#B9B9B9',
      textAlign:"center"
      // width: "100%
    },
  });

  return (
    <div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          marginTop: "auto",
          alignItems: "center",
          // background: alpha("#B9B9B9", 0.2), // Opacity set to 20%,
          borderRadius: "10px",
          padding: "1% 10%",
        }}
      >
        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "0%" }}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}>
            Add Organization
          </Typography>
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: 'poppins', color: '#B9B9B9', textAlign: 'left' }}>Organization Name<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization Name" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: 'poppins', color: '#B9B9B9', textAlign: 'left' }}>Organization PAN<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization Name" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Organization Email ID<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization Email ID" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Organization Mobile<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization Mobile" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Organization Address<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization Address" id="custom-css-outlined-input" size="small" sx={{width:"98%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Organization City<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization City" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Organization State<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Organization State" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Type of Sector<span style={{ color: "red" }}>*</span></Typography>
          {/* <TextField size="small" id="outlined" label="State Name" variant="outlined" sx={{ width: "90%" }} /> */}
          <CssFormControl sx={{width:"95%"}}>
            <InputLabel>Select Type of Sector</InputLabel>
            <CssSelect
              label="Select Type of Sector"
              id="demo-simple-select-outlined"
              size="small"
              // fullWidth
            sx={{ width: '100%', textAlign:"center" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CssSelect>
          </CssFormControl>
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Creation Date<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField 
            value={currentDate + "(Auto)"}
            InputProps={{
              readOnly: true,
            }}
            id="custom-css-outlined-input"
            size="small"
            sx={{width:"95%"}} 
          />
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left" }}>
          <FormGroup sx={{ fontFamily: 'poppins' }}>
            <FormControlLabel control={<Checkbox />} label={<span>I agree to our <span style={{ color: '#9747FF' }}>Terms of use</span> and <span style={{ color: '#9747FF' }}>Private Policy</span></span>} />
          </FormGroup>
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "right", width: "90%" }}>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '120px', height: '35px', borderRadius: '10px', marginRight:"2%" }}>Clear</Button>
          <Button sx={{ border: '1px solid', color: "#000", width: '120px', height: '35px', borderRadius: '10px', backgroundColor:"#E8E8E8" }}>Submit</Button>
        </Box>

      </Box>
    </div>
  );
};
export default AddOrganization;