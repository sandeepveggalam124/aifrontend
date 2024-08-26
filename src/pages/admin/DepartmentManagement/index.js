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

const DepartmentManagement = () => {
  const { isLoggedIn, adminId: admin_id } = useContext(LoginContext);
  const [deptName, setDeptName] = useState("");
  const [creationDate] = useState(new Date().toISOString());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deptData, setDeptData] = useState();
  const [deptId, setDeptId] = useState();
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
        const response = await fetch(
          `http://194.195.117.38:8000/admin-departments-show/${admin_id}/active`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data from fetch api",data)
          setDeptData(data);
        } else {
          console.error("Error fetching dept data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching dept data:", error.message);
      }
    };
    useEffect(() => {
      if (deptName === "") {
        setPage(0); // Reset pagination to the first page
        setIsEdit(false); // Exit edit mode
      }
    }, [deptName]);
 
  const handleDeptSubmit = async () => {
    try {
      if (!deptName.trim()) {
        console.error("Department name cannot be empty");
        Toast.error("Department name cannot be empty")
        return;
      }
    const existingDept = deptData.find(dept => dept.dept_name === deptName);
    if (existingDept) {
      console.error("Department name already exists");
      Toast.error("Department name already exists");
      return;
    }
     

    const response = await aiDishaApi.post("/admin-departments/",
       {
        admin_id: admin_id,
        dept_name: deptName,
        creation_date: creationDate,
        status: "Active",
      });

      if (response.status === 200) {
        Toast.success("Dept added successfully");
        setDeptName("");
        fetchData()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id,name) => {
    setDeptId(id);
    setEditedName(name);
    setDeptName(name);
    setIsEdit(true);
  }

const handleDeptEdit = async (dept_id) => {

  try {

    
    const existingDept = deptData.find(dept => dept.dept_name === deptName && dept.dept_id !== dept_id);
    if (existingDept) {
      console.error("Department name already exists");
      Toast.error("Department name already exists");
      return;
    }

    // If the department name is unique, proceed with the update
    const updateResponse = await aiDishaApi.put(`/admin-departments-update/${admin_id}/${dept_id}`, {
      dept_name: deptName,
      updated_date: new Date().toISOString(),
    });

    if (updateResponse.status === 200) {
      Toast.success("Dept updated successfully");
      setDeptName(""); 
      fetchData();
      setIsEdit(false);
    }
    const updatedDeptData =deptData.map(dept => {
      if (dept.dept_id === deptId) {
        return { ...dept, dept_name: deptName };
      } else {
        return dept;
      }
    });
    setDeptData(updatedDeptData);      
    setIsEdit(false)
    setDeptName("");
  }

   catch (error) {
    console.error("Error:", error);
  } finally {
    setEditingRowId(null);
  }
};


const handleClear = () => {
  setDeptName(""); 
  setDeptId("");
}


  const handleModalOpen = (dept_id) => {
    setDeactiveId(dept_id)
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
       setIsModalOpen(false);
  };

  
  const handleDeactivateDept = async () => {
 
try {

  const response = await aiDishaApi.patch(`/admin-departments-status/${admin_id}/${deactivateId}/status`, {
    status: "Inactive",
  });

  if (response.status === 200) {
    Toast.success("Sector deactivated successfully");
    fetchData();
  }
  if(response.status==200){
    const updatedDeptData=deptData?.filter((dept)=>dept.dept_id!=deactivateId)
    setDeptData(updatedDeptData)
  }
} catch (error) {
  console.error("Error:", error);
}
};
  const deptHeader = [
    {
      id: "Department ID",
      name: "Department Name",
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
            Edit Department
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
            Department ID
          </Typography>
          <CssTextField
            disabled
            label="Disabled"
            id="custom-css-outlined-input"
            value={deptId}
            size="small"
            sx={{ width: "95%" }}
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
          Department Name
          </Typography>
          <TextField
           size="small"
           id="custom-css-outlined-input" 
           label="Dept Name"
            variant="outlined" 
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
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
            onClick={()=>handleDeptEdit(deptId)}
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
            Add Department
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
          Department ID
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
          Department Name
          </Typography>
          <TextField
           size="small"
           id="outlined-input" 
           label="Dept Name"
            variant="outlined" 
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
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
            onClick={handleDeptSubmit}
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
                {deptHeader.map(({ id, name, creationDate, action }) => (
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
                {deptData && deptData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, index) => (
                    <TableRow
                      key={n.dept_id}
                      sx={{ backgroundColor: "#3E3E3E", marginRight: "30px" }}
                    >
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {n.dept_id}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {editingRowId === n.dept_id ? (
                          <Input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                          />
                        ) : (
                          n.dept_name
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
                        {editingRowId === n.dept_id ? (
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
                            onClick={() => handleEdit(n.dept_id, n.dept_name)}
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
                          onClick={()=>handleModalOpen(n.dept_id)}
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
                count={deptData ? deptData.length : 0} 
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Department" action={()=>handleDeactivateDept(deactivateId)} />

    </div>
 
  
  );
};

export default DepartmentManagement;