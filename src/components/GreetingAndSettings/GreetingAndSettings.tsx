import React from 'react'
import classes from './GreetingAndSettings.module.css'
import { Button } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

interface GreetingAndSettingsProps {
    isCollapsed: boolean;
}

export default function GreetingAndSettings({ isCollapsed }: GreetingAndSettingsProps) {
    return (
        <div className={!isCollapsed ? classes.greetingAndSettings : classes.greetingAndSettingsCollapsed}>
            <div className={classes.greeting}>
                <div>
                    <h1>Приветствуем тебя в CleverFit — приложении, </h1><h1>которое поможет тебе добиться своей мечты!</h1>
                </div>
            </div>
            <div className={classes.settings}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SettingOutlined className={classes.settingsIcon} />
                    <p>Настройки</p>
                </div>
            </div>
        </div>
    )
}
