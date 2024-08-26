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

const IndustryManagement = () => {
  const { isLoggedIn, adminId: admin_id } = useContext(LoginContext);
  const [sectorName, setSectorName] = useState("");
  const [creationDate] = useState(new Date().toISOString());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sectorData, setSectorData] = useState();
  const [sectorId, setSectorId] = useState();
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [deactivateId, setDeactiveId] = useState('');
  const [isEdit,setIsEdit]=useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aiDishaApi=createInstance("DISHA")

  useEffect(() => {
    fetchData(); 
  }, []);
 
  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const fetchData = async () => {
      try {
        const response = await fetch(
          `http://194.195.117.38:8000/admin-sectors-show/${admin_id}/active`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data from fetch api",data)
          setSectorData(data);
        } else {
          console.error("Error fetching sector data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching sector data:", error.message);
      }
    };
    useEffect(() => {
      if (sectorName === "") {
        setPage(0); // Reset pagination to the first page
        setIsEdit(false); // Exit edit mode
      }
    }, [sectorName]);
 
  const handleSectorSubmit = async () => {
    try {
      if (!sectorName.trim()) {
        console.error("Sector name cannot be empty");
        Toast.error("Sector name cannot be empty")
        return;
      }
    const existingSector = sectorData.find(sector => sector.sector_name === sectorName);
    if (existingSector) {
      console.error("Sector name already exists");
      Toast.error("Sector name already exists");
      return;
    }

    const response = await aiDishaApi.post("/admin-sectors/",
       {
        admin_id: admin_id,
        sector_name: sectorName,
        creation_date: creationDate,
        status: "Active",
      });
      if (response.status === 200) {
        Toast.success("Sector added successfully");
        setSectorName("");
        fetchData()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id,name) => {
    setSectorId(id);
    setEditedName(name);
    setSectorName(name);
    setIsEdit(true);
  }
 
const handleSectorEdit = async (sector_id) => {

  try {

   
    const existingSector = sectorData.find(sector => sector.sector_name === sectorName && sector.sector_id !== sector_id);
    if (existingSector) {
      console.error("Sector name already exists");
      Toast.error("Sector name already exists");
      return;
    }

    // If the sector name is unique, proceed with the update
    const updateResponse = await aiDishaApi.put(`/admin-sectors-update/${admin_id}/${sector_id}`, {
      sector_name: sectorName,
      updated_date: new Date().toISOString(),
    });
    if (updateResponse.status === 200) {
      Toast.success("Sector updated successfully");
      setSectorName(""); 
      fetchData();
      setIsEdit(false);
    }
     // Update sectorData with the edited sector
     const updatedSectorData = sectorData.map(sector => {
      if (sector.sector_id === sectorId) {
        return { ...sector, sector_name: sectorName };
      } else {
        return sector;
      }
    });
    setSectorData(updatedSectorData);      
    setIsEdit(false)
    setSectorName("");
  }
   catch (error) {
    console.error("Error:", error);
  } finally {
    setEditingRowId(null);
  }
};


const handleClear = () => {
  setSectorName(""); 
  setSectorId("");
};


  const handleModalOpen = (sector_id) => {
    setDeactiveId(sector_id)
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeactivateSector = async () => {
    try {
  
      const response = await aiDishaApi.patch(`/admin-sectors-status/${admin_id}/${deactivateId}/status`, {
        status: "Inactive",
      });
  
      if (response.status === 200) {
        Toast.success("Sector deactivated successfully");
        fetchData();
      }
      if(response.status==200){
        const updatedSectorData=sectorData?.filter((sector)=>sector.sector_id!=deactivateId)
        setSectorData(updatedSectorData)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sectorHeader = [
    {
      id: "Sector ID",
      name: "Sector Name",
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
            Edit Sector
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Sector
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
            Sector ID
          </Typography>
          <CssTextField
            disabled
            label="Disabled"
            id="custom-css-outlined-input"
            value={sectorId}
            size="small"
            sx={{ width: "95%" }}
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Sector Name
          </Typography>
          <TextField
           size="small"
           id="custom-css-outlined-input" 
           label="Sector Name"
            variant="outlined" 
            value={sectorName}
            onChange={(e) => setSectorName(e.target.value)}
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
            onClick={()=>handleSectorEdit(sectorId)}
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
            Add Sector
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Sector
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
            Sector ID
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
            Sector Name
          </Typography>
          <TextField
           size="small"
           id="outlined-input" 
           label="Sector Name"
            variant="outlined" 
            value={sectorName}
            onChange={(e) => setSectorName(e.target.value)}
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
            onClick={handleSectorSubmit}
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
                {sectorHeader.map(({ id, name, creationDate, action }) => (
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
                {sectorData && sectorData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, index) => (
                    <TableRow
                      key={n.sector_id}
                      sx={{ backgroundColor: "#3E3E3E", marginRight: "30px" }}
                    >
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {n.sector_id}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {editingRowId === n.sector_id ? (
                          <Input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                          />
                        ) : (
                          n.sector_name
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
                        {editingRowId === n.sector_id ? (
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
                            onClick={() => handleEdit(n.sector_id, n.sector_name)}
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
                            onClick={()=>handleModalOpen(n.sector_id)}
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
                count={sectorData ? sectorData.length : 0} 
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Sector" action={()=>handleDeactivateSector(deactivateId)} />
    </div>
 
  
  );
};

export default IndustryManagement;



