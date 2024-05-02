import * as React from "react";
import { table1 } from "../utils/data";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Checkbox,
} from "@mui/material";
import { useTheme as themeContext } from "@mui/material/styles";
import { useSmallScreen as smallScreenContext } from "../context/smallScreeen";

const Table1 = () => {
  const theme = themeContext();
  const { smallScreen } = smallScreenContext();

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
          My Task
        </Typography>
      </Box>
      <TableContainer
        style={{ maxWidth: "100%", overflowX: "auto", maxHeight: 440 }}
      >
        <Table sx={{ width: smallScreen ? "max-content" : "100%" }}>
          <TableHead style={{ background: theme.palette.background.tHeader }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table1.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.deadline}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default Table1;
