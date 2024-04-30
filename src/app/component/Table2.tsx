import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { useDarkMode } from '../context/Darkmode';
import { theme } from "../utils/theme";
import { table2 } from '../utils/data';
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
const TableActivity = ({ data }: any) => {
    const { darkMode } = useDarkMode();
    return (
        <div className="col-span-1 md:col-span-5 ">

            <div
                className="shadow-md rounded-md"
                style={{
                    backgroundColor: darkMode ? theme.darkmodeBg : theme.lightmodeBg,
                    color: darkMode ? theme.cardDarkmodeColor : theme.lightmodeClr,
                }}
            >

                <div className="px-4 py-3 border-b border-gray-300">
                    <h4 className="font-semibold">Teams</h4>
                </div>



                <div className="max-h-96 h-500 overflow-y-scroll  ">
                    <table className="w-full h-full table-auto text-left">
                        <thead className="bg-gray-200">
                            <tr className={`${darkMode ? "bg-gray-600" : "bg-gray-100"
                                } font-medium`}>
                                <th className="px-4 py-2 border-b  border-gray-300">Name</th>
                                <th className="px-4 py-2 border-b  border-gray-300">Role</th>
                                <th className="px-4 py-2 border-b  border-gray-300">Activity</th>
                                <th className="px-4 py-2 border-b  border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {table2.map((x: any, key: any) => {
                                return (
                                    <tr key={key} >
                                        <td>
                                            <div className="flex items-center mx-5">
                                                <div>
                                                    <Avatar src={x.img} style={{ marginRight: '5px' }} />
                                                </div>
                                                <div className="ms-2 ">
                                                    <h5 >{x.name}</h5>
                                                    <p >{x.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">{x.role}</td>
                                        <td className="px-4 py-3">{x.lastActivity}</td>
                                        <td className="px-4 py-3"><MoreVertSharpIcon /></td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>



            </div>
        </div>


    );
};

export default TableActivity;
