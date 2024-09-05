import React from 'react';
import styles from './ResponsiveAppBar.module.css';
// Internal Assets
import amberAILogo from '../../assets/images/brand/logos/amber-ai-logo.png';
// Internal Lists
import appBarNavigation from '../../lists/appBarNavigation.tsx';
// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// External Libraries
import { Link, useLocation } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (event?.currentTarget) {
      setAnchorElNav(event.currentTarget);
    }
  };

  const handleCloseNavMenu = (route) => {
    setAnchorElNav(null)
    if (route) {
      window.location.href = route
    }
  };

  return (
    <AppBar position="static" className={styles.container}>
      <Container maxWidth="xl" className={styles.innerContainer}>
        <Toolbar disableGutters>
          <Link to="/" className={styles.logoContainer}>
            <img className={styles.logo} fetchPriority='high' src={amberAILogo} alt='AmberAI Logo' loading="lazy" />
            <Typography className={styles.logoText}>Amber AI</Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '20px' } }}>
            {appBarNavigation.map((page) => (
              <Button key={page.name} onClick={() => handleCloseNavMenu(page.route)} className={currentPath === page.route ? styles.navigationHeaderActive : styles.navigationHeader}>
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button variant="contained" href='/contact-us' className={styles.rightButton} >
              Contact us
            </Button>
          </Box>

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className={styles.menuIcon} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {appBarNavigation.map((page) => (
                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.route)}>
                  <Typography  className={currentPath === page.route ? styles.menuTextActive : styles.menuText}>{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => handleCloseNavMenu('/contact-us')}>
                <Typography  className={currentPath === '/contact-us' ? styles.menuTextActive : styles.menuText}>Contact us</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
