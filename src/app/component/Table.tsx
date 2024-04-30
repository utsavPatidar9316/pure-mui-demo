import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import Image from "next/image";
import { useDarkMode } from "../context/Darkmode";
import { theme } from "../utils/theme";
import { data3 } from "../utils/data";
import { Box, Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TableContent = () => {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  type ProjectData = {
    p_name: string;
    priority: string;
    progress: string;
    chipColor:
      | "primary"
      | "secondary"
      | "error"
      | "warning"
      | "info"
      | "success";
  };

  // Define the ChipProps type
  type ChipProps = {
    data: ProjectData;
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper
            sx={{
              borderRadius: ".5rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              background: theme.palette.background.default,
            }}
          >
            <Box sx={{ px: 2, py: 2, borderBottomWidth: "1px" }}>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                Active Projects
              </Typography>
            </Box>
            <TableContainer className="overflow-x-auto">
              <Table className="w-full table-auto text-left">
                <TableHead>
                  <TableRow>
                    <TableCell className="px-4 py-2">Project name</TableCell>
                    <TableCell className="px-4 py-2">Hours</TableCell>
                    <TableCell className="px-4 py-2">Priority</TableCell>
                    <TableCell className="px-4 py-2">Members</TableCell>
                    <TableCell className="px-4 py-2">Progress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data3.map((x, key) => {
                    let priorityClass = "";
                    switch (x.priority) {
                      case "Medium":
                        priorityClass = "priority-medium";
                        break;
                      case "High":
                        priorityClass = "priority-high";
                        break;
                      case "Low":
                        priorityClass = "priority-low";
                        break;
                      case "Track":
                        priorityClass = "priority-track";
                        break;
                      default:
                        break;
                    }
                    return (
                      <TableRow key={key}>
                        <TableCell
                          className="px-4 py-3"
                          sx={{ display: "flex", gap: 2 }}
                        >
                          <Avatar
                            src={x.src}
                            alt={x.p_name}
                            sx={{ width: 30, height: 30 }}
                          />
                          <div style={{ paddingTop: "3px" }}>{x.p_name}</div>
                        </TableCell>
                        <TableCell className="px-4 py-3">{x.hrs}</TableCell>
                        <TableCell className="px-4 py-3">
                          <span className={`priority-text ${priorityClass}`}>
                            {x.priority}
                          </span>
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <AvatarGroup sx={{ float: "left" }}>
                            {[0, 1, 2, 3].map((number, index) => (
                              <Avatar
                                key={number}
                                alt={`Avatar ${number}`}
                                src={`https://i.pravatar.cc/300?img=${number}`}
                                sx={{
                                  width: 30,
                                  height: 30,
                                  position: "relative",
                                  zIndex: index + 1,
                                  left: index === 0 ? 0 : -((index - 1) * 6),
                                }}
                              />
                            ))}
                            <Avatar
                              sx={{
                                width: 30,
                                height: 30,
                                position: "relative",
                                zIndex: 10,
                                left: "-24px",
                                backgroundColor: "blue",
                                fontSize: "12px",
                              }}
                            >
                              <span>5+</span>
                            </Avatar>
                          </AvatarGroup>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-dark">
                          <div className="flex w-24">
                            <span>{x.progress}</span>
                            <div className="m-1.5 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-300">
                              <div
                                className={`h-1.5 rounded-full ${
                                  x.progress === "100%"
                                    ? "bg-green-700"
                                    : "bg-blue-600"
                                }`}
                                style={{ width: `${x.progress}` }}
                              ></div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* Card footer */}
            <div className="px-3 py-2 border-t text-center">
              <Button className="bg-blue-600 hover:bg-blue-800 text-grey font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded-md">
                View All Projects
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <div
            className="col-span-1 md:col-span-3 mb-5 shadow-md rounded-md"
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h4 className="text-lg font-semibold">Tasks Performance</h4>
              {/* dropdown  */}
              <div className="relative">
                <button
                  className="btn btn-ghost btn-sm rounded-full"
                  id="dropdownTask"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <MoreVertSharpIcon />
                </button>
              </div>
            </div>
            <div className="mt-3">
              <Image
                src="chart.svg"
                alt="Example SVG"
                width={500}
                height={500}
              />
            </div>
            <div className="px-3 py-12">
              <div className="flex items-center justify-around md:flex-wrap">
                <div className="text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle icon-sm text-success"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h1 className="text-2xl mb-0 ">76%</h1>
                  <p>Completed</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trending-up icon-sm text-warning"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  <h1 className="text-2xl mb-0 ">32%</h1>
                  <p>In-Progress</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trending-up icon-sm text-warning"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  <h1 className="text-2xl mb-0 ">13%</h1>
                  <p>Behind</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableContent;
