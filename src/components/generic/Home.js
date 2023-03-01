import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        Welcome to whatever you want this to be!
        <Button component={RouterLink} to="/signin">
          Sign In
        </Button>
        <Button component={RouterLink} to="/signup">
          Sign Up
        </Button>
        <Button component={RouterLink} to="/test">
          Test Element
        </Button>
        <Button component={RouterLink} to="/broken">
          Broken Link
        </Button>
      </Box>
    </>
  );
}
