import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ReportImage from '../../assets/report.png';
import LayoutImage from '../../assets/layout.jpg';
import '../../orderDashboard/orderTable/orderTable.css';
import Sidebar from '../../orderMangement/dataTable/sideBar'; 

const Dashboard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar open/close

  const createData = (name, code, buttonLabel, priority, extra1, extra2, extra3, extra4, extra5, extra6, extra7) => {
    return { name, code, buttonLabel, priority, extra1, extra2, extra3, extra4, extra5, extra6, extra7 };
  };

  const columns = [
    { id: 'extra1', label: 'Shippiing Address', minWidth: 80 },
    { id: 'extra2', label: 'Expected delivery', minWidth: 80 },
    { id: 'extra3', label: 'Order Quuantity', minWidth: 80 },
    { id: 'extra4', label: 'Vendor Handling', minWidth: 80 },
    { id: 'extra5', label: 'total Cost', minWidth: 80 },
    { id: 'extra6', label: 'Person handling', minWidth: 80 },
    { id: 'extra7', label: 'Ext', minWidth: 80 },
    { id: 'name', label: 'Project Name', minWidth: 120 },
    { id: 'code', label: 'Client Name', minWidth: 80 },
    { id: 'date', label: 'Created on', minWidth: 80, align: 'right' },
    { id: 'status', label: 'Status', minWidth: 20, align: 'right' },
    { id: 'action', label: 'Action', minWidth: 20, align: 'right' },
  ];

  const initialRows = [
    createData('Roof Mount RMS', 'Carlos Pablo', 'Completed', 'High', '123 Main St', '2024-02-07', 100, 'Vendor X', '$500', 'John Doe', 'Extra1'),
    createData('China Project', 'Pointy Hawic', 'Pending', 'Medium', '456 Elm St', '2024-02-08', 200, 'Vendor Y', '$800', 'Jane Smith', 'Extra2'),
    createData('Italy Initiative', 'Sun Solar', 'In Progress', 'Low', '789 Oak St', '2024-02-09', 150, 'Vendor Z', '$600', 'Mark Johnson', 'Extra3'),
  ];

  const [rows, setRows] = useState(initialRows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleButtonClick = (index) => {
    const updatedRows = [...rows];
    switch (updatedRows[index].buttonLabel) {
      case 'Completed':
        updatedRows[index].buttonLabel = 'Pending';
        break;
      case 'Pending':
        updatedRows[index].buttonLabel = 'In Progress';
        break;
      case 'In Progress':
        updatedRows[index].buttonLabel = 'Completed';
        break;
      default:
        break;
    }
    setRows(updatedRows);
  };

  const handleSecondButtonClick = () => {
    const newTableValues = [
      createData('New Project 1', 'Client A', 'Pending', 'Medium'),
      createData('New Project 2', 'Client B', 'In Progress', 'Low'),
      createData('New Project 3', 'Client C', 'Completed', 'High'),
      createData('New Project 4', 'Client D', 'Pending', 'Medium'),
      createData('New Project 5', 'Client E', 'In Progress', 'Low'),
    ];

    setRows([...rows, ...newTableValues]);
  };

  const handleReportButtonClick = () => {
    // Open sidebar
    setSidebarOpen(true);
  };

  const toggleSidebar = () => {
    // Close sidebar
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <div className="tile-container2">
        <div className="button-container">
          <Button variant="contained" color="primary">
            U - Builder
          </Button>
          <Button variant="contained" color="secondary" onClick={handleSecondButtonClick}>
            Permit Design
          </Button>

          <Button variant="contained" color="primary">
            Credit Hold
          </Button>
        </div>
        <div className="table-label"></div>
        <Paper sx={{ width: '100%', overflowX: 'auto', marginTop: '20px', }}>
          <h2 className="project-heading">Order History</h2>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.code}</TableCell>
                      <TableCell align="right">{row.extra1}</TableCell>
                      <TableCell align="right">{row.extra2}</TableCell>
                      <TableCell align="right">{row.extra3}</TableCell>
                      <TableCell align="right">{row.extra4}</TableCell>
                      <TableCell align="right">{row.extra5}</TableCell>
                      <TableCell align="right">{row.extra6}</TableCell>
                      <TableCell align="right">{row.extra7}</TableCell>
                      <TableCell align="right">Your Content Here</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          onClick={() => handleButtonClick(rowIndex)}
                          style={{
                            backgroundColor:
                              row.buttonLabel === 'Completed' ? 'green' :
                                row.buttonLabel === 'Pending' ? 'blue' :
                                  'red',
                            color: 'white',
                            '&:hover': {
                              backgroundColor:
                                row.buttonLabel === 'Completed' ? 'darkgreen' :
                                  row.buttonLabel === 'Pending' ? 'darkblue' :
                                    'darkred',
                            },
                          }}
                        >
                          {row.buttonLabel}
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<img src={ReportImage} alt="Report" style={{ width: '30px', height: '30px', margin: '5px' }} />}
                          onClick={handleReportButtonClick} // Open sidebar on report button click
                          style={{ backgroundColor: 'white', color: 'black' }}
                        >
                          Report
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<img src={LayoutImage} alt="Layout" style={{ width: '30px', height: '30px' }} />}
                          onClick={() => {
                            console.log('Layout clicked for row:', row.name);
                          }}
                          style={{ backgroundColor: 'white', color: 'black', margin: '5px' }}
                        >
                          Layout
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar} />} {/* Add overlay to close sidebar when clicked outside */}
      {sidebarOpen && <Sidebar onClose={toggleSidebar} />} {/* Render Sidebar component only if sidebarOpen is true */}
    </div>
  );
};

export default Dashboard;
