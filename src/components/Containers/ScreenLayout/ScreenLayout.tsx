import React from 'react';
import styles from './ScreenLayout.module.css';
// Internal Components
import ResponsiveAppBar from '../../ResponsiveAppBar/ResponsiveAppBar.tsx';
import Footer from '../../Footer/Footer.tsx';

const ScreenLayout = ({ children }) => {
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