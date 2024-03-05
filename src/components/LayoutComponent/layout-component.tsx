import { Layout } from 'antd';
import { Navbar } from '@components/navbar';
import { HeaderComponent } from '@components/HeaderComponent';
import { FooterComponent } from '@components/FooterComponent';
import { ReactNode } from 'react';

import styles from './layout-component.module.css';

type PropsType = {
    children: ReactNode;
    isMainPage?: boolean;
};

export const LayoutComponent = ({ children, isMainPage = false }: PropsType) => {
    return (
        <Layout className={styles.main_layout}>
            <Navbar />
            <Layout style={{ backgroundColor: 'transparent' }}>
                <HeaderComponent isMainPage={isMainPage} />
                {children}
                <FooterComponent isMainPage={isMainPage} />
            </Layout>
        </Layout>
    );
};
