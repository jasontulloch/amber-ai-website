import React from 'react';
import styles from './AboutProduct.module.css'
// Internal Assets
import aboutProductTextList from '../../../assets/text/aboutProductTextList.tsx';
import aboutProductTextHeaders from '../../../assets/text/aboutProductTextHeaders.tsx';
// Material UI
import { Grid2, Typography } from "@mui/material"
import TvIcon from '@mui/icons-material/Tv';

const AboutProduct = () => {
    return (
        <Grid2 container className={styles.container}>
            <Typography className={styles.header}>{aboutProductTextHeaders?.header}</Typography>
            <Typography className={styles.subheader}>{aboutProductTextHeaders?.subheader}</Typography>
            <Grid2 container spacing={10} className={styles.aboutProductContentContainer}> 
                {aboutProductTextList?.map((item) => {
                    return (
                        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
                            <TvIcon className={styles.aboutProductIcon} />
                            <Typography className={styles.aboutProductHeader}>{item.header}</Typography>
                            <Typography className={styles.aboutProductDescription}>{item.description}</Typography>
                        </Grid2>
                    )
                })}
            </Grid2>
        </Grid2>
    )
}

export default AboutProduct;