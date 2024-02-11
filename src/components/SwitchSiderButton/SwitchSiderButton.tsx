import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React from 'react'
import trapezoid from './Rectangle 376.svg'
import classes from './SwitchSiderButton.module.css'

interface SwitchSiderButtonProps {
    setCollapse: () => void;
    isCollapsed: boolean;
}

export default function SwitchSiderButton({ setCollapse, isCollapsed }: SwitchSiderButtonProps) {
    return (
        <div className={classes.switchSiderButton} data-test-id='sider-switch-mobile'>
            <div className={classes.imgContainer} onClick={setCollapse} data-test-id='sider-switch'>
                <div className={classes.trapezoid}>
                    {
                        !isCollapsed ? <MenuFoldOutlined className={classes.imgForToggler} style={{ color: '#8C8C8C' }} />
                            : <MenuUnfoldOutlined className={classes.imgForToggler} style={{ color: '#8C8C8C' }} />
                    }

                </div>
            </div>
        </div>

    )
}
