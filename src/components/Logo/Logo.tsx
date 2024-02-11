import React from 'react'
import logoBig from '@components/Logo/logoBig.svg'
import logoSmall from '@components/Logo/logoSmall.svg'
import { Space } from 'antd'
import classes from './logo.module.css'


interface LogoProps {
    isCollapsed: boolean;
}

export default function Logo({ isCollapsed }: LogoProps) {
    return (
        <div className={classes.logoContainer}>
            <div className={!isCollapsed ? classes.innerSpace : ""}>
                <img src={!isCollapsed ? logoBig : logoSmall} className={!isCollapsed ? classes.imgLogo : classes.imgLogoCollapsed} alt="Логотип" />
            </div>
        </div>



    )
}
