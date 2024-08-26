import React, { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import AddModeratorTwoToneIcon from "@mui/icons-material/AddModeratorTwoTone";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import Charan from "./Charan.jpg";
import { Collapse, Tooltip } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MuiAppBar from "@mui/material/AppBar";
import { tooltipClasses } from "@mui/material/Tooltip";
import DepartmentManagement from "../DepartmentManagement";
import UserManagement from "../UserManagement";
import RoleManagement from "../RoleManagement";
import PageRightsAccess from "../PageRightAccess";
import CandidateResumeManagement from "../CandidateResumeManagement";
import CandidatePerformance from "../CandidatePerformance";
import JobDescription from "../JobDescription";
import { LoginContext } from "../../../contexts/loginContext";
import { CapitalizeName } from "../../../utils/capitalizeName";
import JobDescriptionManagementList from "../JobDescriptionManagementList";
import ResumeListManagement from "../ResumeListManagement";
import OrganizationDashboard from "../OrganizationDashboard";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: "#1E1E1E",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: "#1E1E1E",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#1E1E1E",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  borderRadius: 10,
  backgroundColor: "#1E1E1E",
  marginTop: 15,
  marginRight: 20,
  width: `calc(100% - 7%)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth + 40}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);
const OranizationLandingPage = ({ title }) => {
  const [menudata, setMenudata] = useState("Dashboard");
  const [titleText, setTitleText] = useState("Dashboard");
  const { isLoggedIn, user: name, logout } = useContext(LoginContext);
  const userName = CapitalizeName(name);
  const icons = [
    HomeTwoToneIcon,
    AddModeratorTwoToneIcon,
    PersonOutlineTwoToneIcon,
    SettingsTwoToneIcon,

  ];
  const handleListItemClick = (item) => {
    setMenudata(item);
    setTitleText(item);
  };

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [openIndex, setOpenIndex] = useState(null);
  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <Box sx={{ display: "flex", backgroundColor: "#3E3E3E" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              color="#9747FF"
              sx={{ fontSize: "20px", textAlign: "left" }}
            >
              {titleText}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontFamily: "poppins",
                textAlign: "left",
                color: "#FEFEFE",
              }}
            >
              Manage your {titleText}.{" "}
              <span style={{ color: "#B9B9B9" }}>learn more</span>
            </Typography>
          </Box>
          <Button
            sx={{
              display: { xs: "none", sm: "flex" },
              border: "1px solid #B9B9B9",
              color: "#B9B9B9",
              height: "45px",
              width: "148px",
              borderRadius: "10px",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <ExitToAppIcon />
            Export
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ position: "relative" }}>
          <Box
            sx={{
              backgroundColor: "white",
              width: "100%",
              height: "77%",
              marginTop: "5%",
              marginRight: "30px",
              borderRadius: "10px 30px 0px 20px",
            }}
          >
            {isLoggedIn && (
              <span
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "65px", // Adjust as needed
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1E1E1E",
                }}
              >
                Welcome {userName}
              </span>
            )}
            <img
              src={Charan}
              alt="Logo"
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                top: "14px",
                left: "6px",
                borderRadius: "0% 50% 50% 50%",
              }}
            />
          </Box>
        </DrawerHeader>
        <DrawerHeader>
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{
              color: "white",
              marginRight: 1,
              marginLeft: 1,
            }}
          >
            {open ? (
              <KeyboardDoubleArrowLeftSharpIcon />
            ) : (
              <KeyboardDoubleArrowRightSharpIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List sx={{ color: "white" }}>
          {[
            "Dashboard",
            "Organization Master",
            "User Management",
            "Candidate Management",
          ].map((text, index) => (
            <React.Fragment key={text}>
              <ListItem
                disablePadding
                onClick={() => handleListItemClick(text)}
              >
                <ListItemButton onClick={() => handleItemClick(index)}>
                  <ListItemIcon sx={{ color: "white" }}>
                    <LightTooltip title={text}>
                      {React.createElement(icons[index % icons.length])}
                    </LightTooltip>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {index !== 0 &&
                    index !== 2 &&
                    (openIndex === index ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>

              {text === "Organization Master" && (
                <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {[
                      "Role Management",
                      "Department Management",
                      "Page access rights",
                    ].map((subText, subIndex) => (
                      <ListItem
                        key={subText}
                        disablePadding
                        onClick={() => handleListItemClick(subText)}
                      >
                        <ListItemButton sx={{ marginLeft: "55px" }}>
                          <ListItemText
                            primary={subText}
                            sx={{ color: "#A7A7A7" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}

              {text === "Candidate Management" && (
                <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {["Job Description", "Candidate Resume", "Candidate Performance"].map(
                      (subText, subIndex) => (
                        <ListItem
                          key={subText}
                          disablePadding
                          onClick={() => handleListItemClick(subText)}
                        >
                          <ListItemButton sx={{ marginLeft: "55px" }}>
                            <ListItemText
                              primary={subText}
                              sx={{ color: "#A7A7A7" }}
                            />
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>

        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{
              color: "white",
              marginRight: 1,
            }}
          >
           

            {open ? (
              <KeyboardDoubleArrowLeftSharpIcon />
            ) : (
              <KeyboardDoubleArrowRightSharpIcon />
            )}
           
  
          </IconButton>
        </DrawerHeader>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100vh",
          backgroundColor: "#3E3E3E",
        }}
      >
        <DrawerHeader />
       
        {menudata === "Dashboard" && <OrganizationDashboard/>}
           {/* (isLoggedIn
           ? `welcome to organization dashboard ${userName}`
            : "Welcome to organization dashboard")} */}
        {menudata === "Department Management" && <DepartmentManagement />}
        {menudata === "Role Management" && <RoleManagement />}
        {menudata === "User Management" && <UserManagement />}
        {menudata === "Page access rights" && <PageRightsAccess />}
        {menudata === "Job Description" && <JobDescriptionManagementList />}
        {menudata === "Candidate Resume" && <ResumeListManagement />}
        {menudata === "Candidate Performance" && <CandidatePerformance />}
      </Box>
    </Box>
  );
};

export default OranizationLandingPage;
