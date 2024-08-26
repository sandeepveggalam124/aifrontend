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

const SkillManagement = () => {
  const { isLoggedIn, adminId: admin_id } = useContext(LoginContext);
  const [skillName, setSkillName] = useState("");
  const [creationDate] = useState(new Date().toISOString());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [skillData, setSkillData] = useState();
  const [skillId, setSkillId] = useState();
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedId, setEditedId] = useState('');
  const [deactivateId, setDeactiveId] = useState('');
  const [isEdit,setIsEdit]=useState(false);
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
          `http://194.195.117.38:8000/admin-skills-show/${admin_id}/active`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data from fetch api",data)
          setSkillData(data);
        } else {
          console.error("Error fetching skill data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching skill data:", error.message);
      }
    };
    
    useEffect(() => {
      if (skillName === "") {
        setPage(0); // Reset pagination to the first page
        setIsEdit(false); // Exit edit mode
      }
    }, [skillName]);
 
  const handleSkillSubmit = async () => {
    try {
      if (!skillName.trim()) {
        console.error("Skill name cannot be empty");
        Toast.error("Skill name cannot be empty")
        return;
      }
    const existingSkill = skillData.find(skill => skill.skill_name === skillName);
    if (existingSkill) {
      console.error("Skill name already exists");
      Toast.error("Skill name already exists");
      return;
    }

    const response = await aiDishaApi.post("/admin-skills/",
       {
        admin_id: admin_id,
        skill_name: skillName,
        creation_date: creationDate,
        status: "Active",
      });
      if (response.status === 200) {
        Toast.success("Skill added successfully");
        setSkillName("");
        fetchData()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id,name) => {
    setSkillId(id);
    setEditedName(name);
    setSkillName(name);
    setIsEdit(true);
  }
 
const handleSkillEdit = async (skill_id) => {

  try {

    
    const existingSkill = skillData.find(skill => skill.skill_name === skillName && skill.skill_id !== skill_id);
    if (existingSkill) {
      console.error("Skill name already exists");
      Toast.error("Skill name already exists");
      return;
    }

    // If the skill name is unique, proceed with the update
    const updateResponse = await aiDishaApi.put(`/admin-skills-update/${admin_id}/${skill_id}`, {
      skill_name: skillName,
      updated_date: new Date().toISOString(),
    });

    if (updateResponse.status === 200) {
      Toast.success("Skill updated successfully");
      setSkillName(""); 
      fetchData();
      setIsEdit(false);
    }

    // Update sectorData with the edited sector
    const updatedSkillData = skillData.map(skill => {
      if (skill.skill_id === skillId) {
        return { ...skill, skill_name: skillName };
      } else {
        return skill;
      }
    });
    setSkillData(updatedSkillData);      
    setIsEdit(false)
    setSkillName("");
  }
  catch (error) {
    console.error("Error:", error);
  } finally {
    setEditingRowId(null);
  }
};


const handleClear = () => {
  setSkillName(""); 
  setSkillId("");
};


  const handleModalOpen = (skill_id) => {
    setDeactiveId(skill_id)
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeactivateSkill = async (skill_id) => {
    try {
      const aiDishaApi = createInstance("DISHA");
  
      const response = await aiDishaApi.patch(`/admin-skills-status/${admin_id}/${deactivateId}/status`, {
        status: "Inactive",
      });
  
      if (response.status === 200) {
        Toast.success("Skill deactivated successfully");
        fetchData();
      }
      if(response.status==200){
        const updatedSkillData=skillData?.filter((skill)=>skill.skill_id!=deactivateId)
        setSkillData(updatedSkillData)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const skillHeader = [
    {
      id: "Skill ID",
      name: "Skill Name",
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
            Edit Skill
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Skill
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
            Skill ID
          </Typography>
          <CssTextField
            disabled
            label="Disabled"
            id="custom-css-outlined-input"
            value={skillId}
            size="small"
            sx={{ width: "95%" }}
          />
        </Box>
        <Box gridColumn="span 3" sx={{ marginTop: "auto", textAlign: "left" }}>
          <Typography sx={{ fontFamily: "poppins", color: "#B9B9B9" }}>
            Skill Name
          </Typography>
          <TextField
           size="small"
           id="custom-css-outlined-input" 
           label="Skill Name"
            variant="outlined" 
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
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
            onClick={()=>handleSkillEdit(skillId)}
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
            Add Skill
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "16px", color: "#B9B9B9" }}
          >
            Edit the name of the Skill
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
            Skill ID
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
            Skill Name
          </Typography>
          <TextField
           size="small"
           id="outlined-input" 
           label="Skill Name"
            variant="outlined" 
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
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
            onClick={handleSkillSubmit}
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
                {skillHeader.map(({ id, name, creationDate, action }) => (
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
                {skillData && skillData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((n, index) => (
                    <TableRow
                      key={n.skill_id}
                      sx={{ backgroundColor: "#3E3E3E", marginRight: "30px" }}
                    >
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {n.skill_id}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                      >
                        {editingRowId === n.skill_id ? (
                          <Input
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                          />
                        ) : (
                          n.skill_name
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
                        {editingRowId === n.skill_id ? (
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
                            onClick={() => handleEdit(n.skill_id, n.skill_name)}
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
                          onClick={()=>handleModalOpen(n.skill_id)}
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
                count={skillData ? skillData.length : 0} 
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
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Skill" action={()=>handleDeactivateSkill(deactivateId)} />

    </div>
 
  
  );
};

export default SkillManagement;