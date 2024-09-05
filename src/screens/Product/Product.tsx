import React from 'react';
// Internal Components
import AboutProduct from '../../components/Content/AboutProduct/AboutProduct.tsx';
import ScreenLayout from '../../components/Containers/ScreenLayout/ScreenLayout.tsx';
import PageHeader from '../../components/Text/PageHeader/PageHeader.tsx';

const ProductScreen = () => {
    return (
        <ScreenLayout>
            <PageHeader header={"About Amber AI"} />
            <AboutProduct />
        </ScreenLayout>
    )
}

export default ProductScreen;