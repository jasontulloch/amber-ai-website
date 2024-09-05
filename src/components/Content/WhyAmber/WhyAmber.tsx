import React from 'react';
import styles from './WhyAmber.module.css'
// Internal Lists
import whyAmberList from '../../../assets/text/whyAmber.tsx';
// Material UI
import { Grid2, Typography } from "@mui/material"

const WhyAmber = () => {
    return (
        <Grid2 container className={styles.container}>
            {whyAmberList?.map((item, index) => {
                return (
                    <Typography className={index === 0 ? styles.headerText : styles.descriptionText}>{item}</Typography>
                )
            })}
        </Grid2>
    )
}

export default WhyAmber;