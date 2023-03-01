import React from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider } from '@mui/material/styles';

import Copyright from './Copyright';

export default function Layout() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box
          aria-label="box-outline"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '8px',
            minHeight: '100vh',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Outlet />
          <Box
            component="footer"
            sx={{
              py: 1,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[300]
                  : theme.palette.grey[900],
            }}
          >
            <Container maxWidth="sm">
              <Copyright sx={{ pt: 2 }} />
            </Container>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
