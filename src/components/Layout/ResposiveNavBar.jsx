import React, { useState } from "react";
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import LoginModal from "./LoginModal";
import { Outlet } from "react-router";
import { StyledNavBar } from "../MaterialComponents/NavBarStyled";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAsync } from "../../redux/actions/userAction";
import RegisterModal from "./RegisterModal";
import logo1 from '../Assets/Logo/blancoT.png'
import './styleLogo.scss'

const ResposiveNavBar = ({ setIsLoggedIn }) => {
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const user = useSelector(store => store.user)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handlePage = (page) => {
    console.log(page);
    handleCloseNavMenu()
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(userLogoutAsync())
    setIsLoggedIn(false)
  }

  const handleOpen = () => setOpen(true);
  const handleOpenRegister = () => setOpenRegister(true)

  const pages = ['Eventos', 'Productos'];
  const settingsUser = ['Profile', 'Account', 'Cerrar Sesión'];
  const settingsNoUser = ['Registrarse', 'Iniciar Sesión']
  return (
    <>
      <StyledNavBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <img src={logo1} alt="logo" className="logoNavBar" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePage(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <img src={logo1} alt="logo" className="logoNavBar" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePage(page)}
                  sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'arial' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {
                  !user.uid
                    ? (
                      settingsNoUser.map((setting) => (
                        <MenuItem key={setting}
                          onClick={
                            setting === 'Iniciar Sesión'
                              ? handleOpen
                              : setting === 'Registrarse'
                              && handleOpenRegister

                          }
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))
                    )
                    : (
                      settingsUser.map((setting) => (
                        <MenuItem key={setting}
                          onClick={
                            setting === 'Cerrar Sesión'
                              ? handleLogout
                              : handleCloseUserMenu

                          }
                        >
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))
                    )
                }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </StyledNavBar>
      <LoginModal open={open} setOpen={setOpen} />
      <RegisterModal openRegister={openRegister} setOpenRegister={setOpenRegister} />
      <Outlet />
    </>
  )
};

export default ResposiveNavBar;
