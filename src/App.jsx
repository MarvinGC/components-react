import './App.css'
import React, { useState } from 'react'
import { Navbar, Sidebar, FormGeneral } from './components';
import { Grid } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Sidebar />
      <div className="principal">
        <Grid container 
            spacing={2} 
            sx={{ width: '90%', height: '90%' }}
          >
          <Grid item xs={6}>
            <FormGeneral />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
