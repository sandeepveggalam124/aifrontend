import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Button, TablePagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import AddNewUser from "../AddNewUser";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserManagement = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
    },
  });

  const roles = [
    {
      id: "User ID",
      fullname: "Full Name",
      gender:"Gender",
      emailid: "Email ID",
      mobile: "Mobile",
      city: "City",
      role: "Role",
      joiningdate: "Joining Date",
      action:"Action"
    },
  ];

  const rows = [
    {
      roleid: "1",
      rolefullname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "2",
      rolefullname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "3",
      rolefullname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "4",
      rolefullname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "5",
      rolefullname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "6",
      rolefirstname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "7",
      rolefirstname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "8",
      rolefullname: "abc",
      rolegender:"male",
      roleemailid: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolejoiningdate: "01/01/24",
      rolerole: " Blr",
    },
    
    
  ];

  return (
    <div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        sx={{
          marginTop: "auto",
          alignItems: "center",
          borderRadius: "10px",
          padding: "5% 1% 0% 1%",
        }}
      >
        <Box
          gridColumn="span 12"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "2%" }}
        >
          <Paper
            sx={{
              p: "2px 4px",
              display: "flex",
              width: "65%",
              borderRadius: 2,
              border: "1px solid #A7A7A7",
              backgroundColor: "#3E3E3E" ,
             
            }}
          >
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontFamily: "poppins" }}
              placeholder="Search by Name, Email or Mobile number"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Box>

        <Box gridColumn="span 1" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography
            display="block"
            gutterBottom
            sx={{ color: "#A7A7A7", fontFamily: "poppins" }}
          >
            Filter by:
          </Typography>
        </Box>

        <Box gridColumn="span 4" sx={{ marginTop: "auto", textAlign: "left" }}>
          <CssFormControl sx={{ width: "45%" }}>
            <InputLabel sx={{ color:"#000000" }}>Date Joined</InputLabel>
            <CssSelect
              label="Last Login"
              id="demo-simple-select-outlined"
              size="small"
              sx={{ width: '100%', textAlign: "center"}}
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

        

        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <CssFormControl sx={{ width: "95%" }}>
            <InputLabel>Deactive Accounts</InputLabel>
            <CssSelect
              label="Deactive Accounts"
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

        <Box gridColumn="span 4" sx={{ marginTop: "auto", textAlign: "right" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#9747FF",
              marginRight: "10px",
              color: "#000",
              fontFamily: "poppins",
            }}
            onClick={handleModalOpen}
          >
            Add New User
          </Button>
        </Box>
      </Box>

      <Box xs={1} sx={{ backgroundColor: "#33333" }}>
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              sx={{
                marginTop: "25px",
                borderRadius: "10px",
              }}
            >
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#000000"}}>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0, borderLeft: "1px solid black" }}>{role.id}</TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.fullname}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.gender}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.emailid}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.mobile}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.city}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.role}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.joiningdate}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
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
                          {n.rolefullname}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolegender}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.roleemailid}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolemobile}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolecity}
                        </TableCell>
                       
                       
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolerole}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolejoiningdate}
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom:"1px solid black",
                            borderRight:"1px solid black",
                            display: "flex",
                            alignItems: "center",
                            fontFamily:"poppins",
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
                              width: "40%",
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "black",
                              color: "#A7A7A7",
                              marginRight: "10px",
                              fontFamily: "poppins",
                              height: "20px",
                              width: "40%",
                            }}
                          >
                           View
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              color: "#A7A7A7",
                              marginLeft: "10px",
                              fontFamily: "poppins",
                              height: "20px",
                              width: "70%",
                            }}
                            color="error"
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
      <AddNewUser isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};
export default UserManagement;
