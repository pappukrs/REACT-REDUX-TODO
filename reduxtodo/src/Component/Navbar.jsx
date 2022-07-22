import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {Link} from 'react-router-dom'
const Navbar= () => {
  return (

<>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 ,padding:5,marginLeft:15 }}>
          <Link style={{textDecoration:"none"}} to={'/'}>TodoForm</Link>
          </Typography>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 ,padding:5,marginLeft:15}}>
          <Link style={{textDecoration:"none"}} to={'/todolist'}>TodoList</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
     
     
        
    </div>
    </>
  )
}

export default Navbar;
