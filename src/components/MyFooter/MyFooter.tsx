import React from 'react'
import classes from './MyFooter.module.css'
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

interface MyFooterProps {
    isCollapsed: boolean;
}

export default function MyFooter({ isCollapsed }: MyFooterProps) {
    return (
        <div className={!isCollapsed ? classes.container : classes.containerCollapsed}>
            <div className={classes.reviews}>
                <p>Смотреть отзывы</p>
            </div>
            <div className={classes.downloadOnPhoneBlock}>
                <div className={classes.body}>
                    <div className={classes.downloadOnPhoneInnerBlock}>
                        <p className={classes.downloadOnPhoneText}>Скачать на телефон</p>
                    </div>
                    <div className={classes.availablePROInnerBlock}>
                        <p className={classes.availablePROInnerText}>Доступно в PRO-тарифе</p>
                    </div>
                </div>
                <div className={classes.actions}>
                    <div className={classes.androidBlock}>
                        <AndroidFilled className={classes.icon} style={{ color: '#121212' }} />
                        <p>Android OS</p>
                    </div>
                    <div className={classes.iosBlock}>
                        <AppleFilled className={classes.icon} style={{ color: '#121212' }} />
                        <p>Apple iOS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
