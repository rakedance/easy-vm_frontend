import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

import ServerRow from '../ServerRow/ServerRow';

import { sxServerList, sxTabs } from './styles';
import { TabPanel } from './components/TabPanel';
import ServerTable from '../Table/ServerTable';


const mockServersArray = [
    { name: 'Linux', host: '123.234.123.234', port: '5678', vmArray: [], },
    { name: 'Astra', host: '234.456.234.456', port: '6789', vmArray: [], },
    { name: 'Uebunta', host: '123.234.789.234', port: '1234', vmArray: [], },
    { name: 'Bubunta', host: '234.567.123.234', port: '2345', vmArray: [], },
];

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    sx: {bgcolor: '#ffffff'}
  };
}

export const ServerParkList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
  return (
    <Box
      sx={sxServerList}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={sxTabs}
      >
        <Tab label="Server park 1" {...a11yProps(0)} />
        <Tab label="Server park 2" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ServerTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
