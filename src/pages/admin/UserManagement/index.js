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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
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
      // width: "100%
    },
  });

  const roles = [
    {
      id: "User ID",
      firstname: "First Name",
      email: "Email ID",
      mobile: "Mobile",
      city: "City",
      state: "State",
      department: "Department",
      role: "Role",
      joining: "Joining Date",
    },
  ];

  const rows = [
    {
      roleid: "1",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "2",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "3",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "4",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "5",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "6",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "7",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "8",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "9",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
      rolerole: " Blr",
    },
    {
      roleid: "10",
      rolefirstname: "abc",
      roleemail: "abc@gmail.com",
      rolemobile: "123456789",
      rolecity: "Bangalore",
      rolestate: "Karnataka",
      roledepartment: "asd",
      rolejoining: "01/01/24",
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
          //   background: alpha("#B9B9B9", 0.2), // Opacity set to 20%,
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

        <Box gridColumn="span 2" sx={{ marginTop: "auto", textAlign: "left"  }}>
          <CssFormControl sx={{ width: "95%" }}>
            <InputLabel sx={{ color:"black"
             }}>Date Joined</InputLabel>
            <CssSelect
              label="Last Login"
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

        <Box gridColumn="span 2" sx={{ marginTop: "auto", textAlign: "left" }}>
          {/* <FormControl
            sx={{ width: "80%", backgroundColor: "#fff", borderRadius: "10%" }}
            size="small"
          >
            <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
              Last Login
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Last Login"
              onChange={handleChange}
              sx={{ color: "black" }}
            >
              <MenuItem>Vijayawada</MenuItem>
              <MenuItem>Hyderabad</MenuItem>
              <MenuItem>Delhi</MenuItem>
            </Select>
          </FormControl> */}
          <CssFormControl sx={{ width: "95%" }}>
            <InputLabel>Last Login</InputLabel>
            <CssSelect
              label="Last Login"
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

        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <CssFormControl sx={{ width: "95%"}}>
            <InputLabel>Deactive Accounts</InputLabel>
            <CssSelect
              label="Deactive Accounts"
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

        <Box gridColumn="span 4" sx={{ marginTop: "auto", textAlign: "right" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(151, 71, 255, 1)",
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
                <TableHead sx={{ backgroundColor: "#000000" }}>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0, borderLeft: "1px solid black" }}>{role.id}</TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.firstname}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.email}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.mobile}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.city}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.state}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.department}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.role}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.joining}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
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
                          {n.rolefirstname}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.roleemail}
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
                          {n.rolestate}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.roledepartment}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolerole}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolejoining}
                        </TableCell>
                        <TableCell style={{ color:  "#A7A7A7" ,border: "1px solid black" }}>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
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