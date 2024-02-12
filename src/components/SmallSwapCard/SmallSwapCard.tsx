import React from 'react'
import classes from './SmallSwapCard.module.css'
import { Divider, Space } from 'antd'
import { HeartFilled } from '@ant-design/icons'

interface InfoForCards {
    title: string;
    icon: string | React.ReactNode;
    addText: string;
}


interface SmallSwapCardProps {
    infoForCards: InfoForCards;
    isCollapsed: boolean;
}

export default function SmallSwapCard({ infoForCards, isCollapsed }: SmallSwapCardProps) {

    const { title, icon, addText } = infoForCards;

    return (
        <div className={!isCollapsed ? classes.container : classes.containerCollapsed}>
            <div className={classes.body}>
                <div className={classes.bodyText}>
                    <p>{title}</p>
                </div>
            </div>
            <Divider />
            <div className={classes.actions}>
                <div className={classes.actionButton}>
                    <Space style={{ display: 'flex', alignItems: 'center' }}>
                        {typeof icon === 'string' ? (
                            <img src={icon} alt="icon" className={classes.icon} />
                        ) : (
                            <div className={classes.icon}>{icon}</div>
                        )}
                        {/* <HeartFilled className={classes.icon} /> */}
                        <p>{addText}</p>
                    </Space>
                </div>
            </div>
        </div>
    )
}
