import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './index.scss'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
  <div className='footer'>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <a target="_blank" rel="noreferrer" href="https://github.com/EliaMart">
        <BottomNavigationAction label="Github" icon={<GitHubIcon />} /> 
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elia-martinez-996070208/">
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        </a>
      </BottomNavigation>
    </Box>
    </div>
  );
}


