import React from 'react';
import styles from './PageHeader.module.css';
// Material UI
import { Typography } from '@mui/material';

interface PageHeaderProps {
    header: string
}

const PageHeader = ({ header }: PageHeaderProps) => {
    return (
        <Typography className={styles.text}>{header}</Typography>
    )
}

export default PageHeader;