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
import ReportImage from '../assets/report.png';
import LayoutImage from '../assets/layout.jpg'; 

const columns = [ 
  { id: 'name', label: 'Project Name', minWidth: 120 },   // Reduced minWidth
  { id: 'code', label: 'Client Name', minWidth: 80 },     // Reduced minWidth
  { id: 'date', label: 'Created on', minWidth: 80, align: 'right' }, // Reduced minWidth
  { id: 'status', label: 'Status', minWidth: 20, align: 'right' },  // Reduced minWidth
  { id: 'action', label: 'Action', minWidth: 20, align: 'right' },  // Reduced minWidth
];
function createData(name, code, buttonLabel, priority) {
  return { name, code, buttonLabel, priority };
}

const initialRows = [
  createData('Roof Mount RMS', 'Carlos Pablo', 'Completed', 'High'),
  createData('China Project', 'Pointy Hawic', 'Pending', 'Medium'),
  createData('Italy Initiative', 'Sun Solar', 'In Progress', 'Low'),
  createData('US Project', 'St.Johns', 'Completed', 'High'),
  createData('Canada Initiative', 'IN', 'Pending', 'Medium'),
];

function App() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  return (
    <div className="App">
      <Paper sx={{ width: '100%', margin: '0 auto', paddingLeft: '0px', paddingRight: '10px' }}>
        <h2>Project History</h2>
        <TableContainer sx={{ marginLeft: '10px', marginRight: '100px' ,Left:'20px'}}>
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
                    {/* Content for the new column */}
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
                        onClick={() => {
                          console.log('Report clicked for row:', row.name);
                        }}
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
  );
}

export default App