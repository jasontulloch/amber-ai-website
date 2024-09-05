import React from 'react';
import styles from './PageHeader.module.css';
// Material UI
import { Typography } from '@mui/material';

const PageHeader = ({ header }) => {
    return (
        <Typography className={styles.text}>{header}</Typography>
    )
}

export default PageHeader;