import React from "react";
import { useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";

const RoleManagement = () => {
  const [name, setName] = useState("");
  const [deactivateId, setDeactiveId] = useState("");
  const [roleId, setRoleId] = useState();
  const [editedName, setEditedName] = useState("");
  const [roleName, setRoleName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleEdit = (id, name) => {
    setRoleId(id);
    setEditedName(name);
    setRoleName(name);
    setIsEdit(true);
  };

  useEffect(() => {
    if (roleName === "") {
      setPage(0); // Reset pagination to the first page
      setIsEdit(false); // Exit edit mode
    }
  }, [roleName]);

  const updateResponse = function fetchData() {
    if (updateResponse.status === 200) {
      toast.success("Dept updated successfully");
      setRoleName("");
      // fetchData();
      setIsEdit(false);
    }
    setIsEdit(false);
    setRoleName("");
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleDeactivateDept = async () => {};

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
  const handleModalOpen = (role_id) => {
    setDeactiveId(role_id);
    setIsModalOpen(true);
  };
  const handleClear = () => {
    setRoleName("");
    setRoleId("");
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const currentDate = moment().format("MM/DD/YYYY");
  const roles = [
    {
      id: "Role ID",
      name: "Role Name",
      creationDate: "Creation Date",
      action: "Action",
    },
  ];

  const rows = [
    {
      roleid: "1",
      rolename: "Telangana",
      creationdate: "13/03/2024",
    },
    {
      roleid: "2",
      rolename: "Karnataka",
      creationdate: "13/03/2024",
    },
    {
      roleid: "3",
      rolename: "Andhrapradesh",
      creationdate: "13/03/2024",
    },
    {
      roleid: "4",
      rolename: "Maharastra",
      creationdate: "13/03/2024",
    },
    {
      roleid: "5",
      rolename: "Tamilnadu",
      creationdate: "13/03/2024",
    },
    {
      roleid: "6",
      rolename: "Gujarat",
      creationdate: "13/03/2024",
    },
    {
      roleid: "7",
      rolename: "Madhyapradesh",
      creationdate: "13/03/2024",
    },
    {
      roleid: "8",
      rolename: "Sikkim",
      creationdate: "13/03/2024",
    },
    {
      roleid: "9",
      rolename: "Mumbai",
      creationdate: "13/03/2024",
    },
    {
      roleid: "10",
      rolename: "Calcutta",
      creationdate: "13/03/2024",
    },
  ];

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#B9B9B9",
    },
    "& label": {
      color: "#FEFEFE",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B9B9B9",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B9B9B9",
        borderRadius: 10,
      },
      "&:hover fieldset": {
        borderColor: "#B9B9B9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B9B9B9",
      },
      "& .MuiInputBase-input": {
        // Add this line
        color: "#FEFEFE", // Change the color here
      },
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
          gridColumn="span 12"
          sx={{ marginTop: "auto", textAlign: "left", marginBottom: "20px" }}
        >
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}
          >
            Add Role
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Role
          </Typography>
        </Box>

        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Role ID
          </Typography>
          <CssTextField
            label={
              <span style={{ color: "#FEFEFE" }}>
                #005<span style={{ color: "red" }}>(Auto)</span>
              </span>
            }
            id="custom-css-outlined-input"
            size="small"
            sx={{ width: "95%" }}
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Role Name
          </Typography>
          <TextField
            size="small"
            id="outlined-input"
            label="Role Name"
            variant="outlined"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#B9B9B9",
                borderRadius: "10px",
              },
              "&.MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "grey",
                },
            }}
            required
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Creation Date
          </Typography>
          <TextField
            size="small"
            id="outlined-input"
            variant="outlined"
            value={currentDate + "(Auto)"}
            InputProps={{
              readOnly: true,
            }}
            onChange={(e) => setRoleName(e.target.value)}
            sx={{
              width: "95%",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#B9B9B9",
                borderRadius: "10px",
              },
              "&.MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "grey",
                },
            }}
            required
          />
          {/* <TextField 
            value={currentDate + "(Auto)"}
            InputProps={{
              readOnly: true,
            }}
            id="custom-css-outlined-input"
            size="small"
            sx={{width:"95%",borderRadius:"10px"}} 
          /> */}
        </Box>
        <Box gridColumn="span 2" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Button
            onClick={handleClear}
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
            Save
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
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.id}
                      </TableCell>
                      <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                        {role.name}
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
                          {n.rolename}
                        </TableCell>
                        <TableCell
                          sx={{ color: "#A7A7A7", border: "1px solid black" }}
                        >
                          {n.creationdate}
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
                            onClick={() => handleEdit(n.role_id, n.role_name)}
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
                            onClick={() => handleModalOpen(n.role_id)}
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Department"
        action={() => handleDeactivateDept(deactivateId)}
      />
    </div>
  );
};
export default RoleManagement;
