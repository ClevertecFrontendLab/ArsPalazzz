import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import classes from './main-page.module.css';
import MySider from '@components/Sider/MySider';
import Sider from 'antd/lib/layout/Sider';
import MyHeader from '@components/MyHeader/MyHeader';
import MyContent from '@components/MyContent/MyContent';




export const MainPage: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        console.log(window.innerWidth)
        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div id='appContainer' style={{ width: '100vw', backgroundColor: '#fff' }}>
            <Layout className={classes.mainLayout}>
                {
                    !collapsed ?
                        <div className={classes.sider} >
                            <MySider isCollapsed={collapsed} setCollapse={toggleCollapsed} />
                        </div>
                        :
                        <div className={classes.siderCollapsed} >
                            <MySider isCollapsed={collapsed} setCollapse={toggleCollapsed} />
                        </div>
                }
                <Layout className={!collapsed ? classes.rightLayoutPart : classes.rightLayoutPartCollapsed}>
                    <MyHeader isCollapsed={collapsed} />
                    <MyContent isCollapsed={collapsed} />

                </Layout>
            </Layout>
        </div>

    );
};

