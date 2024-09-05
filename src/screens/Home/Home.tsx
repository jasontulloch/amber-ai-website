import React from 'react';
// Internal Components
import AboutProduct from '../../components/Content/AboutProduct/AboutProduct.tsx';
import ScreenLayout from '../../components/Containers/ScreenLayout/ScreenLayout.tsx';
import Welcome from '../../components/Content/Welcome/Welcome.tsx';
import Capital from '../../components/Content/Capital/Capital.tsx';
import WhyAmber from '../../components/Content/WhyAmber/WhyAmber.tsx';

const HomeScreen = () => {
    
    return (
        <ScreenLayout>
            <Welcome />
            <Capital />
            <AboutProduct />
            <WhyAmber />
        </ScreenLayout>
    )
}

export default HomeScreen;