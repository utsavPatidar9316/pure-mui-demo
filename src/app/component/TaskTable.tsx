import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { table1 } from '../utils/data'
import { CheckBox } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";

interface Data {
    name: string;
    deadline: string;
    status: string;

}

// Function to create data rows from table1 objects
function createRows(tableData: { name: string; deadline: string; status: string }[]): Data[] {
    return tableData.map((item) => ({
        name: item.name,
        deadline: item.deadline,
        status: item.status,
    }));
}

// Creating rows using table1 data
const rows: Data[] = createRows(table1);


export default function StickyHeadTable() {
    const theme = useTheme();

    return (
        <Paper sx={{ width: '100%', background: theme.palette.background.default }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <TableCell colSpan={4} align="left" sx={{ position: "sticky" }}  >My Task</TableCell>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow >
                            <TableCell></TableCell> {/* Empty cell for the checkbox */}
                            <TableCell>Name</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <CheckBox /> {/* Checkbox component */}
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
}