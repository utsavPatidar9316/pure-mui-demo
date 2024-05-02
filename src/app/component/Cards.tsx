import React from "react";
import Image from "next/image";
import { useDarkMode } from "../context/Darkmode";
import { Box, Typography } from "@mui/material";
import { cardData } from "../utils/data";
import { useTheme } from "@mui/material/styles";

const Cards = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();

  const cardStyles = {
    borderRadius: ".5rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    p: "24px",
  };

  const cardImageStyle = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(98,75,255,.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: darkMode ? "brightness(0) invert(1)" : "",
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {cardData.map(({ title, src, number, completed }, index) => (
        <Box
          key={index}
          sx={{
            width: ["100%", "50%", "100%", "25%"], // Responsive widths
            p: "1rem",
          }}
        >
          <Box
            sx={{
              ...cardStyles,
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" sx={{ mb: 0, fontWeight: "bold" }}>
                {title}
              </Typography>
              <Box
                sx={{
                  ...cardImageStyle,
                }}
              >
                <Image src={src} alt={title} width={24} height={24} />
              </Box>
            </Box>
            <Box sx={{ lineHeight: 1.25 }}>
              <Typography
                variant="h5"
                sx={{ mb: 1, fontWeight: "700", fontSize: "1.875rem" }}
              >
                {number}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <span style={{ color: darkMode ? "#fff" : "#000" }}>
                  {completed}
                </span>{" "}
                completed
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
