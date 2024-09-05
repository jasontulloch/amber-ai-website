import React from 'react';
// Internal Components
import AboutProduct from '@/components/Content/AboutProduct/AboutProduct';
import ScreenLayout from '@/components/Containers/ScreenLayout/ScreenLayout';
import PageHeader from '@/components/Text/PageHeader/PageHeader';

const ProductScreen = () => {
    return (
        <ScreenLayout>
            <PageHeader header={"About Amber AI"} />
            <AboutProduct />
        </ScreenLayout>
    )
}

export default ProductScreen;