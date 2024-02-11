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
    // const screens = useBreakpoint() as unknown as Breakpoint;

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        console.log(window.innerWidth)
        window.addEventListener('resize', handleResize);

        // Убираем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getWidth = (val = 0) => {
        if (width >= 834 && width <= 1440) {
            return 64; // Возвращаемое значение для диапазона от 834px до 1440px
        } else if (width >= 340 && width <= 834) {
            return 50; // или другое значение по умолчанию
        } else if (width >= 1440) {
            return 208;
        } else {
            return 50;
        }
    };


    // const layoutWidth = () => {
    //     if ((screens as any).xs) {
    //         return '340px';
    //     }
    //     if ((screens as any).sm || (screens as any).md) {
    //         return '834px';
    //     }
    //     return '1440px';
    // };

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

