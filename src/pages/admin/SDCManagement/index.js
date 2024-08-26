import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import CityManagement from "../CityManagement";
import StateManagment from "../StateManagement";
import DistrictManagement from "../DistrictManagement";

const SDCManagement = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: "state", label: "State Management" },
    { id: "district", label: "District Management" },
    { id: "city", label: "City Management" },
  ];
  const handleClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };
  const renderComponent = () => {
    switch (selectedButton) {
      case "state":
        return <StateManagment />;
      case "district":
        return <DistrictManagement />;
      case "city":
        return <CityManagement />;
      default:
        return null;
    }
  };
  return (
    <>
       <Stack spacing={2} direction="row" fullWidth>
        {buttons.map(({ id, label }) => (
          <Button
            key={id}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: selectedButton === id ? "#1E1E1E" : "#959595",
              color: selectedButton === id ? "#E8E8E8" : "#000000",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: selectedButton === id ? "#1E1E1E" : "#959595",
              },
            }}
            onClick={() => handleClick(id)}
          >
            {label}
          </Button>
        ))}
      </Stack>
      {renderComponent()}
    </>
  );
};

export default SDCManagement;
