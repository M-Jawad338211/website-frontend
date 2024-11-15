// // import React, { useState } from 'react';
// // import Button from '@mui/material/Button';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// // export default function Dropdown({items, handleSelect}) {
// //   const [anchorEl, setAnchorEl] = useState(null);
// //   const open = Boolean(anchorEl);

// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const renderMenuItems = () => {
// //     items.forEach(item => {
// //             <MenuItem onClick={handleSelect}>{item}</MenuItem>
// //     });
// //   }

// //   return (
// //     <div>      <Button
       
// //     onClick={handleClick}
// //     endIcon={<KeyboardArrowDownIcon />}
// //    >
// //   </Button>
// //       <Menu
// //         anchorEl={anchorEl}
// //         open={open}
// //         onClose={handleClose}
// //       >
// //       </Menu>
// //             {renderMenuItems()}
// //     </div>
// //   );
// // }





// // Dropdown.js
// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// export default function Dropdown({ items = [], handleSelect }) {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMenuItemClick = (item) => {
//     handleSelect(item); // Call the handleSelect function from parent component
//     handleClose(); // Close the dropdown menu
//   };

//   // Render dropdown menu items
//   const renderMenuItems = () => {
//     return items.map((item, index) => (
//       <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
//         {item}
//       </MenuItem>
//     ));
//   };

//   return (
//     <div>
//       <Button
//         aria-controls={open ? 'dropdown-menu' : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//         variant="outlined"
//       >
//         Product Type
//       </Button>
//       <Menu
//         id="dropdown-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         {renderMenuItems()}
//       </Menu>
//     </div>
//   );
// }






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
      >
        {label}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
