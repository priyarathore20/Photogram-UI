import { CameraAltOutlined, Notifications, Mail } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  styled,
  Toolbar,
  Typography,
  Box,
  Menu,
  InputBase,
  Avatar,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0px 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          PHOTOGRAM
        </Typography>
        <CameraAltOutlined sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://st4.depositphotos.com/1017228/20160/i/1600/depositphotos_201608550-stock-photo-image-amazing-young-pretty-woman.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://st4.depositphotos.com/1017228/20160/i/1600/depositphotos_201608550-stock-photo-image-amazing-young-pretty-woman.jpg"
            onClick={(e) => setOpen(true)}
          />
          <Typography>@_Priya</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e) => setOpen(false)}
        open={Open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
