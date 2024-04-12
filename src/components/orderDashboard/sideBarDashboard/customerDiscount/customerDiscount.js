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
import compareImage from '../../../assets/compare.png';
import SideBarDash from '../sideBarDashboard';
import Sidebar from '../../../orderDashboard/sideBarDashboard/customerDiscount/sideBarCD/sideBarCD'; 
import iconImage from '../../../assets/Bellring.jpg';
import '../../orderDashboard.css';
import './customerDiscount.css';


const Discount = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const createData = (name, code, buttonLabel, priority, extra1, extra2, extra3, extra4, extra5,) => {
    return { name, code, buttonLabel, priority, extra1, extra2, extra3, extra4, extra5 };
  };

  const columns = [
    { id: 'extra1', label: 'Shippiing Address', minWidth: 80 },
    { id: 'extra3', label: 'Order Quantity', minWidth: 80 },
    { id: 'extra4', label: 'Vendor Description ', minWidth: 80 },
    { id: 'extra5', label: 'total Cost', minWidth: 80 },
    { id: 'date', label: 'Created on', minWidth: 80, align: 'right' },
    { id: 'status', label: 'Status', minWidth: 80, align: 'right' },
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
    
    // Set a constant text for the button label
    updatedRows[index].buttonLabel = 'Active';
    
    setRows(updatedRows);
  };
  

  const handleSecondButtonClick = () => {
    // Remove the onClick handler from this function
    // This function is responsible for updating rows, no onClick behavior needed here
    const newTableValues = [
      createData('New Project 1', 'Client A', 'New orders', 'Medium'),
      createData('New Project 2', 'Client B', 'New orders', 'Low'),
      createData('New Project 3', 'Client C', 'New Orders', 'High'),
      createData('New Project 4', 'Client D', 'New Orders', 'Medium'),
      createData('New Project 5', 'Client E', 'New orders', 'Low'),
      createData('New Project 6', 'Client E', 'New orders', 'Low'),
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
    <div>
      <nav className="navbar-dashboard">
        <img src={iconImage} alt="Icon" className="icon" /> 
        <h2 className="heading">Customer Experience Portal</h2>
        <h3 className="sub-heading">Analytical view for your every order</h3>
        <button className="nav-button">full year</button>
      </nav>
      <div className="dashboard-container">
        <SideBarDash/>
        <div className="tile-container3">
          {/* Removed the onClick handler from the button container */}
          <div className="button-containerCD">
            <Button variant="contained" color="primary">
              Configure team
            </Button>

            <Button variant="contained" color="primary">
              Configure Discount
            </Button>
          </div>
          <div className="table-label"></div>
          <Paper sx={{ width: '90%', margin: '0 auto', paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', }}>
            <h2 className="project-headingCS">Customer Discount Information</h2>
            <TableContainer sx={{ marginLeft: '0px', marginRight: '100px', Left: '10px' }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ paddingLeft: '10px' }} // Add paddingRight to move column names to the right
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
                        <TableCell align="right">{row.extra3}</TableCell>
                        <TableCell align="right">{row.extra4}</TableCell>
                        <TableCell align="right">
                          <Button
                            variant="contained"
                            onClick={() => handleButtonClick(rowIndex)}
                            style={{
                              backgroundColor: '#419639',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'darkgreen', 
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
                            startIcon={<img src={compareImage} alt="Report" style={{ width: '30px', height: '30px', margin: '5px' }} />}
                            onClick={handleReportButtonClick} // Open sidebar on report button click
                            style={{ backgroundColor: 'white', color: 'black' }}
                          >
                             <span>Compare & submit order</span>
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
        {sidebarOpen && <div className="overlay" onClick={toggleSidebar} />} 
        {sidebarOpen && <Sidebar onClose={toggleSidebar} />} 
      </div>
    </div>
  );
};

export default Discount;
