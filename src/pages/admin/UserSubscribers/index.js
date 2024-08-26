import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
  Grid,
  Paper,
  TableContainer,
  TablePagination,
} from "@mui/material";
import Modal from "../Modal";

const UserSubscribers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    setEditingRowId(id);
  };

  const handleSave = () => {
    // Save logic here
    setEditingRowId(null);
  };

  const handlePlanClick = (plan) => {
    console.log("Plan clicked:", plan);
  };

  const handleStatusClick = (status) => {
    console.log("Status clicked:", status);
  };

  const roles = [
    "Organization ID",
    "Organization Name",
    "Email ID",
    "Start Date",
    "End Date",
    "Plan",
    "Status",
    "Action",
  ];

  const rows = [
    {
      roleid: "1",
      organizationName: "Andhra Pradesh",
      emailId: "org1@example.com",
      startDate: "13/03/2024",
      endDate: "13/03/2025",
      plan: "Pro",
      status: "Active",
    },
    {
      roleid: "2",
      organizationName: "MR",
      emailId: "org2@example.com",
      startDate: "13/03/2024",
      endDate: "13/03/2025",
      plan: "Basic",
      status: "Inactive",
    },
    {
      roleid: "3",
      organizationName: "JSD",
      emailId: "org2@example.com",
      startDate: "13/03/2024",
      endDate: "13/03/2025",
      plan: "Enterprize",
      status: "Active",
    },
    {
      roleid: "4",
      organizationName: "MMP",
      emailId: "org2@example.com",
      startDate: "13/03/2024",
      endDate: "13/03/2025",
      plan: "Edit",
      status: "Edit",
    },
    {
      roleid: "5",
      organizationName: "Telangana",
      emailId: "org2@example.com",
      startDate: "13/03/2024",
      endDate: "13/03/2025",
      plan: "Edit",
      status: "Edit",
    },
  ];

  return (
    <div>
      <div className="card-title" sx={{maginLeft:"20px"}}>
        <h1 >Subscribers</h1>
        <h4>Filter by plan</h4>
      </div>
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Button
          sx={{ backgroundColor: ' gray', color: 'white', borderRadius: "8px" }}
        >
          All
        </Button>
        <Button
          sx={{ backgroundColor: 'gray', color: 'white', borderRadius: "8px" }}
        >
          Basic
        </Button>
        <Button
          sx={{ backgroundColor: 'gray', color: 'white', borderRadius: "8px", width: "100px" }}
        >
          Standard
        </Button>
        <Button
          sx={{ backgroundColor: 'gray', color: 'white', borderRadius: "8px", width: "100px" }}
        >
          Premium
        </Button>
      </Box>

      <Box sx={{  }}>
        <Grid container spacing={1} sx={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              sx={{ marginTop: "25px", borderRadius: "10px" }}
            >
              <Table size="small">
                <TableHead sx={{ backgroundColor: "#000000" }}>
                  <TableRow>
                    {roles.map((role, index) => (
                      <TableCell
                        key={index}
                        sx={{ color: "#B9B9B9", borderBottom: 0 }}
                      >
                        {role}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row) => (
                      <TableRow
                        key={row.roleid}
                        sx={{ backgroundColor: "#3E3E3E" }}
                      >
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {row.roleid}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {row.organizationName}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {row.emailId}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {row.startDate}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {row.endDate}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "black",
                              color: "#A7A7A7",
                              marginRight: "10px",
                              fontFamily: "Poppins",
                              height: "20px",
                              width: "auto",
                              padding: "0 10px",
                            }}
                            onClick={() => handlePlanClick(row.plan)}
                          >
                            {row.plan}
                          </Button>
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor:
                                row.status === "Active" ? "green" : "red",
                              color: "#A7A7A7",
                              marginRight: "10px",
                              fontFamily: "Poppins",
                              height: "20px",
                              width: "auto",
                              padding: "0 10px",
                            }}
                            onClick={() => handleStatusClick(row.status)}
                          >
                            {row.status}
                          </Button>
                        </TableCell>
                        <TableCell
                          sx={{
                            borderBottom: "1px solid black",
                            borderRight: "1px solid black",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                            <Button
                              variant="contained"
                              onClick={() =>
                                handleEdit(row.roleid, row.organizationName)
                              }
                              sx={{
                                backgroundColor: "black",
                                color: "#A7A7A7",
                                marginRight: "10px",
                                fontFamily: "Poppins",
                                height: "20px",
                                width: "30px",
                              }}
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="District" />
    </div>
  );
};

export default UserSubscribers;