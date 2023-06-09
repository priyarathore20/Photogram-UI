import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Box, Stack, createTheme } from '@mui/material';
import Add from './Components/Add';
// eslint-disable-next-line no-unused-vars
import { light } from '@mui/material/styles/createPalette';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [Mode, setMode] = useState('light');

  const DarkTheme = createTheme({
    palette: {
      mode: Mode,
    },
  });
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} Mode={Mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
