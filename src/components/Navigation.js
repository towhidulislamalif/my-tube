import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Searchbar from './Searchbar';
import { logo } from '../utilities/constants';

const Navigation = () => (
  <Stack
    alignItems="center"
    direction="row"
    p={2}
    sx={{
      background: '#000',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="brand logo" height={45} />
    </Link>
    <Searchbar />
  </Stack>
);

export default Navigation;
