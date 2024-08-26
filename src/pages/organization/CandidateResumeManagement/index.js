import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Button, TablePagination } from "@mui/material";
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {  InputAdornment, IconButton } from '@mui/material';
import { Typography, Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CandidateResumeManagement = () => {
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
          borderRadius: "10px",
          padding: "1% 10%",
        }}
      >
        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "0%" }}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}>
           Candidate Resume Management
          </Typography>
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: 'poppins', color: '#B9B9B9', textAlign: 'left' }}>Job Title<span style={{ color: "red" }}>*</span></Typography>
          <CssFormControl sx={{width:"95%"}}>
            <InputLabel>Select the job description</InputLabel>
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
          
          <Typography sx={{ fontFamily: 'poppins', color: '#B9B9B9', textAlign: 'left' }}>Upload a Resume(PDF)<span style={{ color: "red" }}>*</span></Typography>
                        <CssTextField   size="small" id="outlined" label="Upload resume" variant="outlined" sx={{width:"95%"}}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            color="primary"
                                            component="label"
                                            htmlFor="file-input"
                                        >
                                            <CloudUploadIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            // onChange={handleFileChange}
                            inputProps={{ accept: '.pdf, .doc, .docx' }}
                        />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Candidate Full name<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Candidate Full name" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Email<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Email ID" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Skills<span style={{ color: "red" }}>*</span></Typography>
          <Stack direction="row" spacing={1} m="auto" style={{ border: "1px solid ", padding: "5px" }}>
                             <Button sx={{fontFamily: "poppins", border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>Skills</Button>
                             <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>Skills</Button>
                             <Button sx={{ fontFamily: "poppins",border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>Skills</Button>
                             <Button sx={{ fontFamily: "poppins",border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>Skills</Button>
                             <Button sx={{fontFamily: "poppins", border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>Skills</Button>
                             <Button sx={{ fontFamily: "poppins",border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>Skills</Button>
                             <Button sx={{fontFamily: "poppins", border: '1px solid', color: "#B9B9B9", width: '120px', height: '45px', borderRadius: '10px' }}>+Add Skills</Button>
                       </Stack>
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Password<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Password" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Experience<span style={{ color: "red" }}>*</span></Typography>
         
          <CssTextField 
            label={
              <span style={{ color: "#FEFEFE" }}>
               Experience<span style={{ color: "red" }}>(Auto)</span>
              </span>
            }
            id="custom-css-outlined-input"
            size="small"
            sx={{width:"95%"}} 
          />
        </Box>
        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Date<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>
       

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "right", width: "90%" }}>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '120px', height: '35px', borderRadius: '10px', marginRight:"2%" }}>Reset</Button>
          <Button sx={{ border: '1px solid', color: "#000", width: '120px', height: '35px', borderRadius: '10px', backgroundColor:"#E8E8E8" }}>Submit</Button>
        </Box>

      </Box>
    </div>
  );
};
export default CandidateResumeManagement ;