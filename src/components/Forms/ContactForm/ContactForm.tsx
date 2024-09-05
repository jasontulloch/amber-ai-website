import React from 'react';
import styles from './ContactForm.module.css'
// Material UI
import { Box, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box className={styles.container}>
      <Box sx={{ maxWidth: '2xl', textAlign: 'center', mx: 'auto', mb: 6 }}>
        <Typography className={styles.headerText}>Contact Us</Typography>
        <Typography className={styles.subheaderText}>We are looking forward to hearing from you.</Typography>
      </Box>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mx: 'auto', maxWidth: 'sm', width: '80vw' }}>
        <Box>
          <TextField
            id="name"
            label="Full name"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth className={styles.submitButton}>
          Let's Talk
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
