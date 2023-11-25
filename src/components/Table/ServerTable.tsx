import { useState } from 'react';
import {
  Box, Collapse, IconButton, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography, Paper, Button
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import ReplayIcon from '@mui/icons-material/Replay';

import { IServer, IVirtualMachine, useServersStore } from '../../store/serversStore';

function ServerRow({ server }: {server: IServer}) {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{server.name}</TableCell>
        <TableCell align="left">{server.host}</TableCell>
        <TableCell align="left">{server.port}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Virtual Machines
              </Typography>
              <Table size="small" aria-label="virtual machines">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {server.virtualMachines && server.virtualMachines.map((vm, index) => (
                    <VMRow key={index} vm={vm} />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function VMRow({ vm }: {vm: IVirtualMachine}) {
  const {setVirtualMachine} = useServersStore();

  const handlePressStart = () => setVirtualMachine(!vm.isActive, 1, 1)

  return (
    <TableRow sx={vm.isActive ? {bgcolor: '#3e683d'} : {bgcolor: '#b55757'}}>
      <TableCell component="th" scope="row">{vm.name}</TableCell>
      <TableCell>{vm.type}</TableCell>
      <TableCell><Button onClick={handlePressStart}><PlayArrowIcon color="success"/></Button></TableCell>
      <TableCell><Button><StopIcon/></Button></TableCell>
      <TableCell><Button><ReplayIcon/></Button></TableCell>
    </TableRow>
  );
}

export default function ServerTable({rows}: {rows: IServer[]}) {
  return (
    <Box sx={{width: '80vw'}}>
      <TableContainer sx={{width: '75vw', mx: 'auto'}}  component={Paper}>
        <Table  aria-label="server table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="left">Host</TableCell>
              <TableCell align="left">Port</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{width: '50%', mx: '20px'}}>
            {rows.map((server, index) => (
              <ServerRow key={index} server={server} />
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    </Box>
  );
}
