import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Box from '@mui/material/Box';
import router from './routes/routes';

const App = () => (
  <Box sx={{ backgroundColor: '#000' }}>
    <RouterProvider router={router} />
  </Box>
);

export default App;
