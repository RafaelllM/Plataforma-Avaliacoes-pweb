import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: '80vh', transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Link to={'/turma'}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
        </SpeedDial>
      </Link>
    </Box>
  );
}