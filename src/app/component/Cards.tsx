import React from "react";
import Image from "next/image";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
import { Typography, Box } from "@mui/material";
import { cardData } from "../utils/data";
const Cards = () => {
  const { darkMode } = useDarkMode();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {cardData.map((x, key) => (
        <Box
          key={key}
          sx={{
            // width: "25%", // Default width
            "@media (max-width:600px)": {
              // Apply full width on small screens and below
              width: "100%",
            },
            "@media (min-width:601px) and (max-width:960px)": {
              // Apply half width on medium screens
              width: "50%",
            },
            "@media (min-width:961px) and (max-width:1280px)": {
              // Apply half width on large screens
              width: "100%",
            },
            "@media (min-width:1281px)": {
              // Revert to default width on extra-large screens
              width: "25%",
            },
            p: "1rem",
          }}
        >
          <Box
            sx={{
              borderRadius: ".5rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
              backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
              color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
              p: "24px",
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
                {x.title}
              </Typography>
              <Box
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(98,75,255,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: darkMode ? "brightness(0) invert(1)" : "",
                }}
              >
                <Image src={x.src} alt={x.title} width={24} height={24} />
              </Box>
            </Box>
            <Box sx={{ lineHeight: 1.25 }}>
              <Typography
                variant="h5"
                sx={{ mb: 1, fontWeight: "700", fontSize: "1.875rem" }}
              >
                {x.number}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <span style={{ color: darkMode ? "#fff" : "#000" }}>
                  {x.completed}
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
