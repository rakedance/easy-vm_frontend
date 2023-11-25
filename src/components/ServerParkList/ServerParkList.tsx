import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

import ServerTable from '../Table/ServerTable';
import { IServer } from '../../store/serversStore';

import { sxServerList, sxTabs } from './styles';
import { TabPanel } from './components/TabPanel';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    sx: {bgcolor: '#ffffff'}
  };
}

export const ServerParkList = ({servers}: {servers: IServer[]}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent , newValue: number) => {
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
        <ServerTable rows={servers} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
