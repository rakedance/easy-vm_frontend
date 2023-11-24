import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { sxContainer, sxHeader, sxHeaderTitle } from './styles';

export const Header = () => {

  return (
    <Box sx={sxContainer}>
      <AppBar sx={sxHeader}  position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={sxHeaderTitle}>
            EasyVM
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
