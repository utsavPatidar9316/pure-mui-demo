import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { table2 } from "../utils/data";
import { useTheme } from "@mui/material/styles";
import { useSmallScreen } from "../context/smallScreeen";

const TeamTable = () => {
  const theme = useTheme();
  const { smallScreen } = useSmallScreen();
  return (
    <Paper
      sx={{
        borderRadius: ".5rem",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        background: theme.palette.background.default,
      }}
    >
      <Box sx={{ px: 2, py: 2, borderBottomWidth: "1px" }}>
        <Typography variant="h6" sx={{ fontWeight: "400" }}>
          Teams
        </Typography>
      </Box>
      <TableContainer
        style={{ maxWidth: "100%", overflowX: "auto", maxHeight: 440 }}
      >
        <Table sx={{ width: smallScreen ? "max-content" : "100%" }}>
          <TableHead style={{ background: theme.palette.background.tHeader }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Last Activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table2.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={`https://i.pravatar.cc/300?img=${index}`} />
                    <Box>
                      <Typography>{item.name}</Typography>
                      <Typography>{item.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.lastActivity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default TeamTable;
