import React from 'react';
// Internal Components
import AboutProduct from '@/components/Content/AboutProduct/AboutProduct';
import ScreenLayout from '@/components/Containers/ScreenLayout/ScreenLayout';
import Welcome from '@/components/Content/Welcome/Welcome';
import Capital from '@/components/Content/Capital/Capital';
import WhyAmber from '@/components/Content/WhyAmber/WhyAmber';

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