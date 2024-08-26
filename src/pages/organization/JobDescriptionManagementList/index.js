import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, TablePagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import ViewModal from "../ViewModal";
import Modal from "../Modal";
import JobDescription from "../JobDescription";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const JobDescriptionManagementList = ({ onOpenJobDescription }) => {

    const [isJobDescriptionOpen, setIsJobDescriptionOpen] = useState(false);

    const handleOpenJobDescription = () => {
        setIsJobDescriptionOpen(true);
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

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleViewModalOpen = () => {
        setIsViewModalOpen(true);
    };

    const handleViewModalClose = () => {
        setIsViewModalOpen(false);
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
            id: "Job ID",
            title: "Job Title",
            experience: "Year of Experience",
            location: "Location",
            salary: "Salary Range",
            employ: "Employ Type",
            skills: "Skills",
            action: "Action",
        },
    ];

    const rows = [
        {
            roleid: "1",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "2",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "3",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "4",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "5",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "6",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "7",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },
        {
            roleid: "8",
            roletitle: "abc",
            roleexperience: "abc",
            rolelocation: "Bangalore",
            rolesalary: "20000",
            roleemploy: "Full Time",
            roleskills: "React",
        },

    ];

    return (
        isJobDescriptionOpen ? (
            <Box
                sx={{
                    marginTop: "25px",
                    borderRadius: "10px",
                    backgroundColor: "#33333",
                    maxHeight: "calc(100vh - 120px)", // Set maximum height to fill the viewport
                    overflowY: "auto", // Enable vertical scrolling
                }}
            >
                <JobDescription />
            </Box>
        ) :
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
                    <Box gridColumn="span 12" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "5%" }}>
                        <Typography sx={{ fontFamily: "poppins", fontSize: "28px", color: "#B9B9B9" }}>
                            Job Description Management List
                        </Typography>
                    </Box>

                    <Box gridColumn="span 8" sx={{ marginTop: "auto", textAlign: "left", marginBottom: "0%" }}>
                        <Paper
                            sx={{
                                p: "2px 4px",
                                display: "flex",
                                width: "90%",
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

                    <Box gridColumn="span 4" sx={{ marginTop: "auto", textAlign: "center" }}>
                        <Button
                            variant="contained"
                            onClick={handleOpenJobDescription}
                            sx={{
                                backgroundColor: "#E8E8E8",
                                marginRight: "10px",
                                color: "#000",
                                fontFamily: "poppins",
                            }}
                        >
                            Add New JD
                        </Button>
                    </Box>
                </Box>
                <Box xs={1} sx={{ backgroundColor: "#33333" }}>
                    <Grid container spacing={1} sx={{ justifyContent: "center" }}>
                        <Grid item xs={11}>
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
                                                    {role.title}
                                                </TableCell>
                                                <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                    {role.experience}
                                                </TableCell>
                                                <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                    {role.location}
                                                </TableCell>
                                                <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                    {role.salary}
                                                </TableCell>
                                                <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                    {role.employ}
                                                </TableCell>
                                                <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                    {role.skills}
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
                                                        {n.roletitle}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                    >
                                                        {n.roleexperience}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                    >
                                                        {n.rolelocation}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                    >
                                                        {n.rolesalary}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                    >
                                                        {n.roleemploy}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                    >
                                                        {n.roleskills}
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
                                                            sx={{
                                                                backgroundColor: "black",
                                                                color: "#A7A7A7",
                                                                marginRight: "10px",
                                                                fontFamily: "poppins",
                                                                height: "20px",
                                                                width: "80px",
                                                            }}
                                                        >
                                                            EDIT
                                                        </Button>
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
                                                        <Button
                                                            variant="contained"
                                                            sx={{
                                                                color: "#A7A7A7",
                                                                marginLeft: "10px",
                                                                fontFamily: "poppins",
                                                                height: "20px",
                                                                width: '80px',
                                                            }}
                                                            color="error"
                                                            onClick={handleModalOpen}
                                                        >
                                                            Delete
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
                <Modal isOpen={isModalOpen} onClose={handleModalClose} title="Role" />
                <ViewModal isOpen={isViewModalOpen} onClose={handleViewModalClose} title="Role" />
            </div>
    );
};


export default JobDescriptionManagementList;
