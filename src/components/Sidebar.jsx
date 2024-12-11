import React from 'react';
import './Sidebar.css';
import { Box } from '@mui/material';
//icons
import DeleteIcon from '@mui/icons-material/Delete';
import ShieldIcon from '@mui/icons-material/Shield';
import NoteIcon from '@mui/icons-material/Note';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">
          <Box 
            height={20}
            width={200}
            display="flex"
            gap={4}
            alignItems="center"
            justifyContent="start"
          >
            <NoteIcon />
            <p>
              Notas
            </p>
          </Box>
          </a>
        </li>
        <li><a href="/form-general">
          <Box 
            height={20}
            width={200}
            gap={4}
            display="flex"
            alignItems="center"
            justifyContent="start"
          >
            <ShieldIcon />
            <p>
              Baúl
            </p>
          </Box>
          </a>
        </li>
        <li><a href="#notas-archivadas">
            <Box 
              height={20}
              width={200}
              gap={4}
              display="flex"
              alignItems="center"
              justifyContent="start"
            >
              <Inventory2Icon />
              <p>
              Notas archivadas
              </p>
            </Box>
          </a>
        </li>
        <li><a href="#papelera">
          <Box 
            height={20}
            width={200}
            gap={4}
            display="flex"
            alignItems="center"
            justifyContent="start"
          >
            <DeleteIcon />
            <p>
              Papelera
            </p>
          </Box>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;