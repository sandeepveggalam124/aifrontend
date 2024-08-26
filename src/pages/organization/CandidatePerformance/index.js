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
import ViewModel from "../ViewModal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CandidatePerformance = ({ onOpenAddOrganization }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleViewModalOpen = () => {
    setIsViewModalOpen(true);
  };

  const handleViewModalClose = () => {
    setIsViewModalOpen(false);
  };

  const handleAddOrganizationClick = () => {
    onOpenAddOrganization(); // Call the function passed from AdminLandingPage
  };

  const roles = [
    {
      id: "Candidate ID",
      name: "Candidate Name",
      position: "Applied Position",
      date: "Interview Date",
      status: "Interview Status",
      action: "Action",
    },
  ];

  const rows = [
    {
      roleid: "1",
      rolename: "abc",
      roleposition: "abc",
      roledate: "13/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "2",
      rolename: "abc",
      roleposition: "1234",
      roledate: "13/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "3",
      rolename: "abc",
      roleposition: "1234",
      roledate: "13/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "4",
      rolename: "abc",
      roleposition: "1234",
      roledate: "13/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "5",
      rolename: "abc",
      roleposition: "1234",
      roledate: "13/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "6",
      rolename: "abc",
      roleposition: "1234",
      roledate: "14/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "7",
      rolename: "abc",
      roleposition: "1234",
      roledate: "14/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "8",
      rolename: "abc",
      roleposition: "1234",
      roledate: "14/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "9",
      rolename: "abc",
      roleposition: "1234",
      roledate: "14/04/2024",
      rolestatus: " Blr",
    },
    {
      roleid: "10",
      rolename: "abc",
      roleposition: "1234",
      roledate: "14/04/2024",
      rolestatus: " Blr",
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
          padding: "1% 1%",
        }}
      >
        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "0%" }} >
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}
          >
            Candidate Performance
          </Typography>
        </Box>

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
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0, borderLeft: "1px solid black"   }}>{role.id}</TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0  }}>
                        {role.name}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0  }}>
                        {role.position}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0}}>
                        {role.date}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.status}
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
                          {n.rolename}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.roleposition}
                        </TableCell>                       
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.roledate}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolestatus}
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
                            onClick={handleViewModalOpen}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      <ViewModel isOpen={isViewModalOpen} onClose={handleViewModalClose} title="Role" />
    </div>
  );
};
export default CandidatePerformance;
