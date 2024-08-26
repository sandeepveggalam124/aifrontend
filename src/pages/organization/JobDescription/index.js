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
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const JobDescription = ({ onOpenJobDescription }) => {
  const [name, setName] = useState("");

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [responsibility, setResponsibility] = React.useState('');
  const [description, setDescription] = React.useState('');
  // const [value, setValue] = React.useState('');
  const maxLength = 500;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selected, setSelected] = React.useState([]);
  const [value, setValue] = React.useState(['default']);

  const CssTextField = styled(TextField)({
    // '& label.Mui-focused': {
    //   color: '#B9B9B9',
    // },
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
      textAlign: "center"
      // width: "100%
    },
  });

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
      }}>
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
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9", mb: "2%" }}>
            Job Description Management
          </Typography>
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: 'poppins', color: '#B9B9B9', textAlign: 'left' }}>Job Title<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField
           label="Enter Job Title"
            id="custom-css-outlined-input"
             size="small"
              sx={{ width: "90%", mb: "2%" }}
               />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: 'poppins', color: '#B9B9B9', textAlign: 'left' }}>Year of Experience<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Year of Experience" id="custom-css-outlined-input" size="small" sx={{ width: "90%", mb: "2%" }} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>City<span style={{ color: "red" }}>*</span></Typography>
          <CssFormControl sx={{ width: "90%"}}>
            <InputLabel>City</InputLabel>
            <CssSelect
              label="City"
              id="demo-simple-select-outlined"
              size="small"
              sx={{ width: '100%', textAlign: "center" }}
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

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%"  }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>State<span style={{ color: "red" }}>*</span></Typography>
          <CssFormControl sx={{ width: "90%"}}>
            <InputLabel>State</InputLabel>
            <CssSelect
              label="State"
              id="demo-simple-select-outlined"
              size="small"
              // fullWidth
              sx={{ width: '100%', textAlign: "center" }}
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
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Salary Range<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Salary" id="custom-css-outlined-input" size="small" sx={{ width: "90%", mb: "2%" }} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", width: "90%", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Employee Type<span style={{ color: "red" }}>*</span></Typography>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '23%', height: '35px', borderRadius: '10px', marginRight: "2%", fontSize: "11px", marginBottom: "2%" }}>Full Time</Button>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '23%', height: '35px', borderRadius: '10px', marginRight: "2%", fontSize: "11px", marginBottom: "2%" }}>Part Time</Button>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '23%', height: '35px', borderRadius: '10px', marginRight: "2%", fontSize: "11px", marginBottom: "2%" }}>Contract</Button>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '23%', height: '35px', borderRadius: '10px', marginRight: "2%", fontSize: "11px", marginBottom: "2%" }}>Internship</Button>
          {/* <ToggleButtonGroup
            spacing={2}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Button value="default">Default</Button>
          </ToggleButtonGroup> */}
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", width: "90%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Job Description<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField
            id="outlined-multiline-flexible"
            label="Enter Job Description"
            multiline
            rows={2}
            sx={{ width: "100%", mb: "2%" }}
          />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", width: "90%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Responsibility<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField
            id="outlined-multiline-flexible"
            label="Enter Job Description"
            multiline
            rows={2}
            sx={{ width: "100%", mb: "2%" }}
          />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Required Skills<span style={{ color: "red" }}>*</span></Typography>
          {/* <TextField size="small" id="outlined" label="State Name" variant="outlined" sx={{ width: "90%" }} /> */}
          <CssFormControl sx={{ width: "90%" }}>
            <InputLabel>Select Skills</InputLabel>
            <CssSelect
              label="Select Type of Sector"
              id="demo-simple-select-outlined"
              size="small"
              sx={{ width: '100%', textAlign: "center", mb: "2%" }}
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
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Additional Skills</Typography>
          <CssTextField label="Enter Additional Skills" id="custom-css-outlined-input" size="small" sx={{ width: "90%", mb: "2%" }} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Functional Area</Typography>
          <CssTextField label="Enter Functional Area" id="custom-css-outlined-input" size="small" sx={{ width: "90%", mb: "2%" }} />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Role<span style={{ color: "red" }}>*</span></Typography>
          {/* <TextField size="small" id="outlined" label="State Name" variant="outlined" sx={{ width: "90%" }} /> */}
          <CssFormControl sx={{ width: "90%" }}>
            <InputLabel>Select Role</InputLabel>
            <CssSelect
              label="Select Role"
              id="demo-simple-select-outlined"
              size="small"
              sx={{ width: '100%', textAlign: "center", mb: "2%" }}
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

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", width: "90%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>About the Company<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField
            id="outlined-multiline-flexible"
            label="Enter About the Company"
            multiline
            rows={5}
            sx={{ width: "100%", mb: "4%" }}
          />
        </Box>

        <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Education<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField label="Enter Education Details" id="custom-css-outlined-input" size="small" sx={{ width: "90%", mb: "2%" }} />

          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Benifits<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField
            id="outlined-multiline-flexible"
            label="Enter Benifits"
            multiline
            rows={2}
            sx={{ width: "90%", mb: "3%" }}
          />
        </Box>

        {/* <Box gridColumn="span 6" sx={{ marginTop: "auto", textAlign: "left", width: "90%" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: 'left' }}>Benifits<span style={{ color: "red" }}>*</span></Typography>
          <CssTextField
            id="outlined-multiline-flexible"
            label="Enter Benifits"
            multiline
            rows={2}
            sx={{ width: "100%" }}
          />
        </Box> */}

        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "right", width: "90%" }}>
          <Button sx={{ border: '1px solid', color: "#B9B9B9", width: '120px', height: '35px', borderRadius: '10px', marginRight: "2%" }}>Clear</Button>
          <Button sx={{ border: '1px solid', color: "#000", width: '120px', height: '35px', borderRadius: '10px', backgroundColor: "#E8E8E8" }}>Submit</Button>
        </Box>

      </Box>
    </div>
  );
};
export default JobDescription;