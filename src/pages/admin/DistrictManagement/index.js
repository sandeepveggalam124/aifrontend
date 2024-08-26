import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Button, TablePagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import Modal from "../Modal";
import moment from "moment";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DistrictManagement = () => {
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

  const [age, setAge] = useState("");
  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  const currentDate = moment().format("MM/DD/YYYY");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  const roles = [
    {
      id: "District ID",
      statename: "State Name",
      districtname: "District Name",
      pincode: "District Code",
      creationDate: "Creation Date",
      action: "Action",
    },
  ];

  const rows = [
    {
      roleid: "1",
      statename: "AndhraPradesh",
      districtname: "Chittoor",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "2",
      statename: "Telangana",
      districtname: "Hyderabad",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "3",
      statename: "Tamilnadu",
      districtname: "Chennai",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "4",
      statename: "Kerala",
      districtname: "Kollam",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "5",
      statename: "Maharastra",
      districtname: "Mumbai",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "6",
      statename: "AndhraPradesh",
      districtname: "Chittoor",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "7",
      statename: "Telangana",
      districtname: "Hyderabad",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "8",
      statename: "Tamilnadu",
      districtname: "Chennai",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "9",
      statename: "Kerala",
      districtname: "Kollam",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
    {
      roleid: "10",
      statename: "Maharastra",
      districtname: "Mumbai",
      pincode: "TA",
      creationdate: "13/03/2024",
    },
  ];

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
          marginTop: "30px",
          alignItems: "center",
          background: alpha("#B9B9B9", 0.2), // Opacity set to 20%,
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <Box
          gridColumn="span 3"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "10px" }}
        >
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}
          >
            Add District
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Department
          </Typography>
        </Box>

        <Box
          gridColumn="span 4"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "10px" }}
        >
          <Typography
            sx={{ fontFamily: "poppins", color: "#B9B9B9", textAlign: "left" }}
          >
            State Name
          </Typography>
          <CssFormControl sx={{width:"95%"}}>
            <InputLabel>State Name</InputLabel>
            <CssSelect
              label="State Code"
              id="demo-simple-select-outlined"
              size="small"
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

        <Box
          gridColumn="span 3"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "10px" }}
        >
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Creation Date
          </Typography>
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
        <Box
          gridColumn="span 2"
          sx={{ marginTop: "auto", textAlign: "center", marginBottom: "10px" }}
        >
          <Button
            sx={{
              border: "1px solid",
              color: "#B9B9B9",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              fontFamily: "poppins",
            }}
          >
            clear
          </Button>
        </Box>

        <Box
          gridColumn="span 5"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "10px" }}
        >
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            District Name
          </Typography>
          <CssTextField label="District Name" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box
          gridColumn="span 5"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "10px" }}
        >
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            District Code
          </Typography>
          <CssTextField label="District Code" id="custom-css-outlined-input" size="small" sx={{width:"95%"}} />
        </Box>

        <Box
          gridColumn="span 2"
          sx={{ marginTop: "auto", textAlign: "center", marginBottom: "10px" }}
        >
          <Button
            sx={{
              background: "#B9B9B9",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              fontFamily: "poppins",
            }}
          >
            <Typography sx={{ fontFamily: "poppins", color: "black", }}>Save</Typography>
          </Button>
        </Box>
      </Box>

      <Box xs={1} sx={{ backgroundColor: "#33333" }}>
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item xs={10}>
            <TableContainer
              component={Paper}
              sx={{
               
                marginTop: "25px",
                borderRadius: "10px",
              }}
            >
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#000000" }}>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0, borderLeft:"1px solid black" }}>{role.id}</TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.statename}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.districtname}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.pincode}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.creationDate}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {" "}
                        {role.action}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((n, index) => (
                      <TableRow
                        key={n.id}
                        sx={{ backgroundColor: "#3E3E3E", marginRight: "30px" }}
                      >
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.roleid}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.statename}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.districtname}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.pincode}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.creationdate}
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom:"1px solid black",
                            borderRight:"1px solid black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "black",
                              color: "#A7A7A7",
                              marginRight: "10px",
                              fontFamily: "poppins",
                              height: "20px",
                              width: "80px",
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              color: "#A7A7A7",
                              marginLeft: "20px",
                              fontFamily: "poppins",
                              height: "20px",
                              width: "100px",
                            }}
                            color="error"
                            onClick={handleModalOpen}
                          >
                            Deactivate
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                  backgroundColor: "#000000",
                  color: "#B9B9B9",
                }}
              />
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="District" />
    </div>
  );
};
export default DistrictManagement;