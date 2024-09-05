import React from 'react';
import styles from './Capital.module.css'
// Internal Assets
import generalCatalyst from '../../../assets/images/thirdParties/general-catalyst-logo.jpg';
import yCombinator from '../../../assets/images/thirdParties/y-combinator-logo.png';
// Material UI
import { Box, Grid2, Typography } from "@mui/material"

const Capital = () => {
    return (
        <Grid2 container className={styles.container}>
            <Typography className={styles.header}>Backed by the biggest names in venture capital</Typography>
            <Grid2 container spacing={2} className={styles.imageContainer}> 
                <Box component="img" src={yCombinator} alt="Y Combinator Logo" className={styles.yCombinatorImage} />
                <Box component="img" src={generalCatalyst} alt="General Catalyst Logo" className={styles.generalCatalystImage}/>
            </Grid2>
        </Grid2>
    )
}

export default Capital;