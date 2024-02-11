import { Space } from 'antd'
import React from 'react'
import { Breadcrumb } from 'antd';
import GreetingAndSettings from '@components/GreetingAndSettings/GreetingAndSettings';
import classes from './MyHeader.module.css'

interface MyHeaderProps {
    isCollapsed: boolean;
}

export default function MyHeader({ isCollapsed }: MyHeaderProps) {
    return (
        <div className={!isCollapsed ? classes.myHeader : classes.myHeaderCollapsed}>
            <Space style={{ paddingTop: '16px', paddingLeft: '24px', gap: '0' }}>
                {/* <Breadcrumb>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                </Breadcrumb> */}
                <p>Главная</p>
                <GreetingAndSettings isCollapsed={isCollapsed} />
            </Space>

        </div>
    )
}
