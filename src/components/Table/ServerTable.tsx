import React, { useState } from 'react';
import {
  Box, Collapse, IconButton, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography, Paper, Button
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface IVm {
    name: string;
    type: string;
}

interface IServer {
    name: string,
    host: string,
    port: number,
    vms: IVm []
}

function createServerData({name, host, port, vms}: IServer) {
  return {
    name, host, port, vms
  };
}

function createVMData({name, type}: IVm) {
  return { name, type };
}
 
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
                  {server.vms.map((vm, index) => (
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

function VMRow({ vm }: {vm: IVm}) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">{vm.name}</TableCell>
      <TableCell>{vm.type}</TableCell>
      <TableCell><Button>Start</Button></TableCell>
      <TableCell><Button>Stop</Button></TableCell>
      <TableCell><Button>Restart</Button></TableCell>
    </TableRow>
  );
}

export default function ServerTable() {
  const rows = [
    createServerData({name: 'Server 1', host: '192.168.1.1', port: 8080, vms: [
      createVMData({name:'VM1', type: 'KVM'}),
      createVMData({name: 'VM2', type: 'QEMU'})
    ]}),
    createServerData({name: 'Server 2', host: '192.168.1.2', port: 8081, vms: [
      createVMData({name:'VM1', type: 'KVM'}),
      createVMData({name: 'VM2', type: 'QEMU'})
    ]}),
    createServerData({name: 'Server 3', host: '192.168.1.3', port: 8082, vms: [
      createVMData({name:'VM1', type: 'KVM'}),
      createVMData({name: 'VM2', type: 'QEMU'})
    ]}),
    createServerData({name: 'Server 4', host: '192.168.1.4', port: 8083, vms: [
      createVMData({name:'VM1', type: 'KVM'}),
      createVMData({name: 'VM2', type: 'QEMU'})
    ]}),
  ];

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