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
import { Container } from "@mui/material";
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

const AreaManagment = () => {
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

  const roles = [
    {
      id: "State ID",
      name: "State Name",
      code: "State Code",
      creationDate: "Creation Date",
      action: "Action",
    },
  ];

  const rows = [
    {
      roleid: "1",
      rolename: "Telangana",
      rolecode: "TA",
      creationdate: "1/5/2023",
    },
    {
      roleid: "2",
      rolename: "Karnataka",
      rolecode: "KA",
      creationdate: "4/5/2023",
    },
    {
      roleid: "3",
      rolename: "Andhrapradesh",
      rolecode: "AP",
      creationdate: "6/5/2023",
    },
    {
      roleid: "4",
      rolename: "Maharastra",
      rolecode: "MH",
      creationdate: "8/5/2023",
    },
    {
      roleid: "5",
      rolename: "Tamilnadu",
      rolecode: "TM",
      creationdate: "9/5/2023",
    },
    {
      roleid: "6",
      rolename: "Gujarat",
      rolecode: "TA",
      creationdate: "11/5/2023",
    },
    {
      roleid: "7",
      rolename: "Madhyapradesh",
      rolecode: "TA",
      creationdate: "13/5/2023",
    },
    {
      roleid: "8",
      rolename: "Sikkim",
      rolecode: "TA",
      creationdate: "15/5/2023",
    },
    {
      roleid: "9",
      rolename: "Mumbai",
      rolecode: "TA",
      creationdate: "17/5/2023",
    },
    {
      roleid: "10",
      rolename: "Calcutta",
      rolecode: "TA",
      creationdate: "20/5/2023",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const currentDate = moment().format("MM/DD/YYYY");
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
        <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}
          >
            Add State
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Department
          </Typography>
        </Box>

        <Box
          gridColumn="span 3"
          sx={{
            marginTop: "auto",
            textAlign: "left",
          }}
        >
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            State Name
          </Typography>
          <TextField
            size="small"
            id="outlined"
            label="State Name"
            variant="outlined"
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            State Code
          </Typography>
          <TextField
            size="small"
            id="outlined"
            label="State Code"
            variant="outlined"
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Creation Date
          </Typography>
          <TextField
            size="small"
            id="outlined"
            variant="outlined"
            value={currentDate + "(Auto)"}
            InputProps={{
              readOnly: true,
               }}
          />
        </Box>
        <Box gridColumn="span 2" sx={{ marginTop: "auto", textAlign: "left" }}>
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

        <Box gridColumn="span 1" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Button
            sx={{
              background: "#B9B9B9",
              color: "black",
              width: "120px",
              height: "40px",
              borderRadius: "10px",
              fontFamily: "poppins",
            }}
          >
            <Typography sx={{ fontFamily: "poppins" }}>Save</Typography>
          </Button>
        </Box>
      </Box>
     

      <Box xs={1} sx={{ backgroundColor: "#33333" }}>
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item xs={8}>
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
                      <TableCell sx={{ color: "#B9B9B9" }}>{role.id}</TableCell>
                      <TableCell sx={{ color: "#B9B9B9" }}>
                        {role.name}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9" }}>
                        {role.code}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9" }}>
                        {role.creationDate}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9" }}>
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
                          {n.rolename}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.rolecode}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.creationdate}
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "1px solid black",
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
                              height:"20px",
                              width:'80px',
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
                              height:"20px",
                              width:'100px'
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="State" />
    </div>
  );
};
export default AreaManagment;
