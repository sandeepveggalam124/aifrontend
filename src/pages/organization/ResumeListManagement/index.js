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
import ViewModal from "../ViewModal";
import Modal from "../Modal";
import Link from '@mui/material/Link';
import { useLocation } from "react-router-dom";
// import AddOrganization from "../AddOrganization";
import CandidateResumeManagement from "../CandidateResumeManagement";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? " #1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const ResumeListManagement = ({  }) => {

    const [isCandidateResumeOpen, setIsCandidateResumeOpen] = useState(false);
    const handleOpenCandidateResumeMgnt = () => {
        setIsCandidateResumeOpen(true);
    };

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

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleViewModalOpen = () => {
        setIsViewModalOpen(true);
    };

    const handleViewModalClose = () => {
        setIsViewModalOpen(false);
    };

    // const handleAddOrganizationClick = () => {
    //     onOpenAddOrganization(); // Call the function passed from AdminLandingPage
    // };

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
            id: "Unidue ID",
            email: "Email ID",
            firstName: "First Name",
            lastName: "Last Name",
            resume: "Upload a Resume",
            interview: "Interview Timing",
            action: "Action",
        },
    ];

    const rows = [
        {
            roleid: "1",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "2",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "3",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "4",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "5",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "6",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "7",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },
        {
            roleid: "8",
            roleemail: "abc2@gmail.com",
            rolefirstName: "abc",
            rolelastName: "Ravi",
            roleresume: "Resume",
            roleinterview: "13:00",
        },

    ];

    return (
        isCandidateResumeOpen ? (
            <Box
                sx={{
                    marginTop: "25px",
                    borderRadius: "10px",
                    backgroundColor: "#33333",
                    maxHeight: "calc(100vh - 120px)", // Set maximum height to fill the viewport
                    overflowY: "auto", // Enable vertical scrolling
                }}
            >
                <CandidateResumeManagement />
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
                        Resume List Management
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
                        onClick={handleOpenCandidateResumeMgnt}
                        sx={{
                            backgroundColor: "#E8E8E8",
                            marginRight: "10px",
                            color: "#000",
                            fontFamily: "poppins",
                        }}
                    // onClick={handleModalOpen}
                    >
                        Add New Resume
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
                                                {role.email}
                                            </TableCell>
                                            <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                {role.firstName}
                                            </TableCell>
                                            <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                {role.lastName}
                                            </TableCell>
                                            <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                {role.resume}
                                            </TableCell>
                                            <TableCell sx={{ color: "#B9B9B9", borderBottom: 0 }}>
                                                {role.interview}
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
                                                    {n.roleemail}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                >
                                                    {n.rolefirstName}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                >
                                                    {n.rolelastName}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                >
                                                    {n.roleresume}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ color: "#A7A7A7", border: "1px solid black" }}
                                                >
                                                    {n.roleinterview}
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
                                                    // onClick={handleViewModalOpen}
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
export default ResumeListManagement;
