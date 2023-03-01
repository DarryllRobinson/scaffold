import { createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Generic elements
import Layout from './components/generic/Layout';
import Home from './components/generic/Home';

// Navigation elements
import NavbarLayout from './components/navigation/NavbarLayout';
import SignIn from './components/navigation/SignIn';
import SignUp from './components/navigation/SignUp';
import ErrorPage from './components/navigation/ErrorPage';

// Define theme settings
const light = { palette: { mode: 'light' } };
const dark = { palette: { mode: 'dark' } };

export default function App() {
  // Theme state set up
  // Light theme is default theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Getting device scheme settings to use as default for App
  useEffect(() => {
    // Update the default theme with device setting
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    // Check to see if it changes at any point
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setIsDarkTheme(
          window.matchMedia('(prefers-color-scheme: dark)').matches
        );
      });
  }, [isDarkTheme]);

  // Toggling theme
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* NavBar on top for the following elements */}
          <>
            <Route
              element={
                <NavbarLayout checked={isDarkTheme} onChange={changeTheme} />
              }
            >
              <Route path="test" element={<div>Test</div>} />

              {/* Using path="*"" means "match anything", so this route acts like a catch-all for URLs that we don't have explicit routes for. */}
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
