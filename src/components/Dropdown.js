import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Dropdown({ label, items, handleSelect }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Open Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          width: '180px', // Set your preferred width
          backgroundColor: "#E8E8E8",
          color: "#000000",
          '&:hover': {
            background: "linear-gradient(90deg, #0A3253 0%, #9F3F3F 100%)",
            color: '#ffffff',
          }
        }}
      >
        {label}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            width: anchorEl ? anchorEl.clientWidth : 'auto', 
          },
        }}
        PaperProps={{
          style: {
            width: anchorEl ? `${anchorEl.clientWidth}px` : 'auto', 
          },
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleSelect(item);
              handleClose();
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
