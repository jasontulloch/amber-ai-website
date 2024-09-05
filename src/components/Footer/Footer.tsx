import React from 'react';
import styles from './Footer.module.css'
// Internal Lists
import appBarNavigation from '../../lists/appBarNavigation.tsx';
// Material UI
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Grid2, Typography } from '@mui/material';
// External Libraries
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <AppBar position="static" className={styles.container}>
      <Container maxWidth="xl" className={styles.innerContainer}>
        <Grid2 container spacing={4} className={styles.contentContainer}> 
          <Grid2 size={{ xs: 12, lg: 4 }}>
            <Typography className={styles.headerText}>Amber AI</Typography>
            <Typography className={styles.unpressableText}>© 2024 Amber AI Inc. All rights reserved.</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 4 }}>
            <Typography className={styles.headerText}>Menu</Typography>
            {appBarNavigation?.map((item, index) => {
              return (
                <Link key={index} to={item.route} className={styles.linkWrapper}>
                  <Typography className={styles.pressableText}>{item.name}</Typography>
                </Link>
              )
            })}
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 4 }}>
            <Typography className={styles.headerText}>Contact</Typography>
            <Link to="/contact-us" className={styles.linkWrapper}>
              <Typography className={styles.pressableText}>Contact us</Typography>
            </Link>
          </Grid2>
        </Grid2>
      </Container>
    </AppBar>
  );
}

export default Footer;
