import React from 'react';
import styles from './WhyAmber.module.css';
// Internal Lists
import whyAmberList from '../../assets/text/whyAmber.tsx';
// Internal Components
import ScreenLayout from '../../components/Containers/ScreenLayout/ScreenLayout.tsx';
import PageHeader from '../../components/Text/PageHeader/PageHeader.tsx';
// Material UI
import { Typography } from '@mui/material';

const WhyAmberScreen = () => {

    return (
        <ScreenLayout>
            <PageHeader header={"Why Amber AI"} />
            {whyAmberList?.map((item, index) => {
                return (
                    <Typography key={index} className={index === 0 ? styles.firstItemText : styles.itemText}>{item}</Typography>
                )
            })}
        </ScreenLayout>
    )
}

export default WhyAmberScreen;