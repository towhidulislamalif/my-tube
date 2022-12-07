import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Paper } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        borderRadius: 20,
        mr: { sm: 5 },
        pl: 2,
      }}
    >
      <input
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{ p: '10px', color: 'red' }}
      >
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
