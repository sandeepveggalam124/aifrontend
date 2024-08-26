import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Button, Input, TablePagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LoginContext } from "../../../contexts/loginContext";
import createInstance from "../../../api/axiosinstance";
import Modal from "../Modal";
import Toast from "../../../utils/toast";

const RoleManagement = () => {
  const { isLoggedIn, OrgId: Org_id } = useContext(LoginContext);
  const [roleName, setRoleName] = useState("");
  const [creationDate] = useState(new Date().toISOString());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [roleData, setRoleData] = useState();
  const [roleId, setRoleId] = useState();
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [deactivateId, setDeactiveId] = useState('');
  const [editedId, setEditedId] = useState('');
  const [isEdit,setIsEdit]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aiDishaApi=createInstance("DISHA")

  useEffect(() => {
    fetchData(); 
  }, []);
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const fetchData = async () => {
      try {
        const response = await aiDishaApi.get("/Org-Role-Show/" );
  
             if (response.ok) {
          const data = await response.json();
          console.log("Fetched data from fetch api",data)
          setRoleData(data);
        } else {
          console.error("Error fetching role data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching roledata:", error.message);
      }
    };
    useEffect(() => {
      if (roleName === "") {
        setPage(0); // Reset pagination to the first page
        setIsEdit(false); // Exit edit mode
      }
    }, [roleName]);
 


  const handleRoleSubmit = async () => {
    try {
      if (!roleName.trim()) {
        console.error("Role name cannot be empty");
        Toast.error("Role name cannot be empty");
        return;
      }
  
      // Check if the role name already exists
      const existingRole = roleData.find(role => role.role_name === roleName);
      if (existingRole) {
        console.error("Role name already exists");
        Toast.error("Role name already exists");
        return;
      }
  
      // Send POST request to create a new role
      const response = await aiDishaApi.post("/Org-Role-Create/", 
      {
        Org_id: Org_id ,
        role_name: roleName,
        status: "Active",
      });





  
      if (response.status === 200) {
        Toast.success("Role added successfully");
        // setRoleName("");
        // Fetch updated role data after successful creation
        fetchData();
        setRoleName("");
      }
    } 
    catch (error) {
      console.error("Error:", error);
      Toast.error("Failed to add role");
    }
    // console.log("")
  };

  const handleEdit = (id,name) => {
    setRoleId(id);
    setEditedName(name);
    setRoleName(name);
    setIsEdit(true);
  }

const handleRoleEdit = async (role_id) => {

  try {

    
    const existingRole = roleData.find(role => role.role_name === roleName && role.role_id !==role_id);
    if (existingRole) {
      console.error("Role name already exists");
      Toast.error("Role name already exists");
      return;
    }

    // If the Role name is unique, proceed with the update
    const updateResponse = await aiDishaApi.put("/Org-Role-Edit/", {
     role_name: roleName,
      updated_date: new Date().toISOString(),
    });

    if (updateResponse.status === 200) {
      Toast.success("Role updated successfully");
      setRoleName(""); 
      fetchData();
      setIsEdit(false);
    }
    const updatedRoleData =roleData.map(role => {
      if (role.role_id === roleId) {
        return { ...role, role_name: roleName };
      } else {
        return role;
      }
    });
    setRoleData(updatedRoleData);      
    setIsEdit(false)
    setRoleName("");
  }

   catch (error) {
    console.error("Error:", error);
  } finally {
    setEditingRowId(null);
  }
};




const handleClear = () => {
  setRoleName(""); 
  setRoleId("");
}


  const handleModalOpen = (role_id) => {
    setDeactiveId(role_id)
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
       setIsModalOpen(false);
  };

  
  const handleDeactivateRole = async () => {
 
try {

  const response = await aiDishaApi.put("/Org-Role-status/", {
    status: "Inactive",
  });

  if (response.status === 200) {
    Toast.success("Sector deactivated successfully");
    fetchData();
  }
  if(response.status==200){
    const updatedRoleData=roleData?.filter((role)=>role.role_id!=deactivateId)
    setRoleData(updatedRoleData)
  }
} catch (error) {
  console.error("Error:", error);
}
};
  const roleHeader = [
    {
      id: "Role ID",
      name: "Role Name",
      creationDate: "Creation Date",
      action: "Action",
    },
  ];

  const CssTextField = styled(TextField)({
    "& label": {
      color: "#FEFEFE",
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
        color: "#FEFEFE",
      },
    },
  });

  return (
    <div>
      {isEdit?(<Box
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
            Edit Role
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Role
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
           Role ID
          </Typography>
          <CssTextField
            disabled
            label="Disabled"
            id="custom-css-outlined-input"
            value={roleId}
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
           id="custom-css-outlined-input" 
           label="Feedback Management"
            variant="outlined" 
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            sx={{ width: "95%" }}
            required/>
          
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Updated Date
          </Typography>
          <CssTextField
            value={creationDate}
            InputProps={{
              readOnly: true,
            }}
            id="custom-css-outlined-input"
            size="small"
            sx={{ width: "95%" }}
          />
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
            Clear
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
            onClick={()=>handleRoleEdit(roleId)}
          >
            <Typography sx={{ fontFamily: "poppins", color: "#000" }}>
              Save
            </Typography>
          </Button>
        </Box>
      </Box>):(
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
  
        <Box
          gridColumn="span 3"
          sx={{
            marginTop: "auto",
            textAlign: "left",
          }}
        >
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
         Role ID
          </Typography>
          <CssTextField
            disabled
            label="Disabled"
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
           label="Feedback Management"
            variant="outlined" 
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            sx={{ width: "95%",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#B9B9B9",borderRadius:"10px" },
            "&.MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline": {
              borderColor: "grey"}
            }}
            required/>
             
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Creation Date
          </Typography>
          <CssTextField
            value={creationDate}
            InputProps={{
              readOnly: true,
            }}
            id="custom-css-outlined-input"
            size="small"
            sx={{ width: "95%" }}
          />
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
            Clear
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
            onClick={handleRoleSubmit}
          >
            <Typography sx={{ fontFamily: "poppins", color: "#000" }}>
              Save
            </Typography>
          </Button>
        </Box>
      </Box>)}
  
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
                {roleHeader.map(({ id, name, creationDate, action }) => (
                  <React.Fragment key={id}>
                    <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                      {id}
                    </TableCell>
                    <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                      {name}
                    </TableCell>
                    <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                      {creationDate}
                    </TableCell>
                    <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                      {action}
                    </TableCell>
                  </React.Fragment>
                ))}
              </TableHead>
              <TableBody>
                {roleData && roleData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, index) => (
                    <TableRow
                      key={n.role_id}
                      sx={{ backgroundColor: "#3E3E3E", marginRight: "30px" }}
                    >
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {n.role_id}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {editingRowId === n.role_id ? (
                          <Input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                          />
                        ) : (
                          n.role_name
                        )}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {new Date(n.creation_date).toLocaleDateString('en-GB')}
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "1px solid black",
                          borderRight: "1px solid black",
                          display: "flex",
                          alignItems: "center",
                          fontFamily: "poppins",
                        }}
                      >
                        {editingRowId === n.role_id ? (
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "black",
                              color: "#A7A7A7",
                              marginRight: "10px",
                              fontFamily: "poppins",
                              height: "20px",
                              width: "30px",
                            }}
                          >
                            Save
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            onClick={() => handleEdit(n.role_id, n.role_name)}
                            sx={{
                              backgroundColor: "black",
                              color: "#A7A7A7",
                              marginRight: "10px",
                              fontFamily: "poppins",
                              height: "20px",
                              width: "30px",
                            }}
                          >
                            Edit
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          sx={{
                            color: "#A7A7A7",
                            marginLeft: "20px",
                            fontFamily: "poppins",
                            height: "20px",
                            width: "100px",
                          }}
                          onClick={()=>handleModalOpen(n.role_id)}
                            color="error"
                        >
                          Deactive
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={roleData ? roleData.length : 0} 
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Department" action={()=>handleDeactivateRole(deactivateId)} />

    </div>
 
  
  );
};

export default RoleManagement;