import './Navbar.css';
import '@fontsource/roboto';
import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { Search, DensityMedium } from '@mui/icons-material';

const Navbar = ({onToggleSideBar}) => {
  const [searchTerm, setSearchTerm] = useState();
  const handleSubmit = () => {
    alert(`el valor ingresado es ${searchTerm}`)
  }
  return (
    <div className="navbar">
        <div className="navbar-left-menu">
            <div className="navbar-sidebar-icon" onClick={onToggleSideBar} >
              <IconButton 
                sx={{ "&:hover": {color: 'var(--color-main-dark-250)' }, color: 'var(--color-main-dark-100)' }}>
                <DensityMedium />
              </IconButton>
            </div>
            <div className="navbar-brand">
              <a href="#"><Typography>Notas MarlexGC</Typography></a>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="navbar-search-bar">
              <IconButton type='submit' sx={{ color: 'var(--color-main-dark-100)' }} aria-label='search'>
                <Search />
              </IconButton>
              <input name="search-input" 
              className="search-bar-input" 
              placeholder="Buscar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            </form>
        </div>
        <div className="navbar-right-menu">
            <a href="#update"> <Typography>Actualizar</Typography></a>
            <a href="#view"> <Typography>Cambiar tema</Typography>  </a>
            <a href="#settings"> <Typography>Configuración</Typography>  </a>
        </div>
    </div>
    );
};

export default Navbar;