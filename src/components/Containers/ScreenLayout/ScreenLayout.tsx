import React from 'react';
import styles from '@/components/Containers/ScreenLayout/ScreenLayout.module.css';
// Internal Components
import ResponsiveAppBar from '@/components/ResponsiveAppBar/ResponsiveAppBar';
import Footer from '@/components/Footer/Footer';

const ScreenLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.appBarContainer}>
          <ResponsiveAppBar />
        </div>
        {children}
      </div>
      <div className={styles.footerSpacer} />
      <Footer />
    </div>
  );
};

export default ScreenLayout;