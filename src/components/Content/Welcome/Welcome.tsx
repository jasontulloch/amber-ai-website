import React, { useState, useEffect } from 'react';
import styles from './Welcome.module.css'
// Internal Assets
import welcomeHighlightedMessagesTextList from '@/assets/text/welcomeHighlightedMessagesTextList';
import learning from '@/assets/images/demo/learning.jpeg';
// Material UI
import { Box, Button, Grid2, Typography } from "@mui/material"

const Welcome = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    
    if (isTyping) {
      const currentMessage = welcomeHighlightedMessagesTextList[messageIndex];
      
      if (index < currentMessage.length) {
        timer = setInterval(() => {
          setText((prev) => prev + currentMessage[index]);
          setIndex((prev) => prev + 1);
        }, 100); // Adjust typing speed here
      } else {
        clearInterval(timer);
        setTimeout(() => setIsTyping(false), 3000); // Delay before starting backspace
      }
    } else {
      if (text.length > 0) {
        timer = setInterval(() => {
          setText((prev) => prev.slice(0, -1));
        }, 50); // Adjust backspacing speed here
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setIsTyping(true);
          setIndex(0);
          setMessageIndex((prev) => (prev + 1) % welcomeHighlightedMessagesTextList?.length); // Loop through messages
        }, 1000); // Delay before starting typing again
      }
    }
    
    return () => clearInterval(timer);
  }, [isTyping, index, text, messageIndex]);

  return (
    <Grid2 container spacing={6} className={styles.container}>
      <Grid2 size={{ xs: 12, md: 6}}>
        <Box className={styles.textContainer}>
          <Typography>
            <Typography
              className={styles.headerTextActive}
              sx={{
                display: 'inline-block',
                backgroundColor: '#F7D7B5',
                lineHeight: 1.1,
                transition: 'width 0.5s ease-in-out',
              }}
            >
              {text}
              {(welcomeHighlightedMessagesTextList[messageIndex].length === index) ? (
                <span className={styles.cursor} />
              ) : (null)}
            </Typography>
            <Typography className={styles.headerText}>the digital environment for kids</Typography>
          </Typography>
        </Box>
        <Box className={styles.subheaderTextContainer}>
          <Typography className={styles.subheaderText}>Technology can be complicated. Your child's education shouldn't be.</Typography>
        </Box>
        <Box className={styles.contactUsContainer}>
          <Button variant="contained" href='/contact-us' className={styles.contactUsButton}>Contact us</Button>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6}}>
        <Box component="img" src={learning} alt="Learning Image" className={styles.learningImage} />
      </Grid2>
    </Grid2>
  )
}

export default Welcome;
