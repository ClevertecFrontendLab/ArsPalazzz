import React, { useState } from 'react';
import { Layout } from 'antd';
import classes from './main-page.module.css';
import MySider from '@components/Sider/MySider';
import MyHeader from '@components/MyHeader/MyHeader';
import MyContent from '@components/MyContent/MyContent';




export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


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

