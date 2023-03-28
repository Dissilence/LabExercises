import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function NavbarMui() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Website</Typography>
        <NavLink exact to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink to="/about" style={{ textDecoration: 'none' }}>
          <Button color="inherit">About</Button>
        </NavLink>
        <NavLink to="/login" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Login</Button>
        </NavLink>
        <NavLink to="/posts" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Posts</Button>
        </NavLink>
        <NavLink to="/students" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Students</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarMui;