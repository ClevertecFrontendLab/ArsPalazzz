import React, { useState } from 'react';
import { Layout } from 'antd';
import { Navigate } from 'react-router-dom';
import { HeaderComponent } from '@components/HeaderComponent';
import { MainContent } from '@components/MainContent';
import { FooterComponent } from '@components/FooterComponent';
import { Navbar } from '@components/navbar';
import { useAppSelector } from '@redux/configure-store.ts';
import { PATHS } from '@constants/paths.ts';

import styles from './main-page.module.css';

export const MainPage: React.FC = () => {
    const prevPath = useAppSelector((state) => state.router.previousLocations);
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    if (
        !localStorage.getItem('accessToken') &&
        prevPath &&
        prevPath[prevPath.length - 1].location?.pathname !== PATHS.AUTH
    ) {
        sessionStorage.clear();
        return <Navigate to={PATHS.AUTH} />;
    }
    return (
        <Layout className={styles.main_layout}>
            <Navbar setNavbarCollapsed={setNavbarCollapsed} />
            <Layout style={{ backgroundColor: 'transparent' }}>
                <HeaderComponent navbarCollapsed={navbarCollapsed} />
                <MainContent navbarCollapsed={navbarCollapsed} />
                <FooterComponent navbarCollapsed={navbarCollapsed} />
            </Layout>
        </Layout>
    );
};
