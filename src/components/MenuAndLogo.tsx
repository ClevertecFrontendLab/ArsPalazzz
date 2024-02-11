import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/MyMenu'

interface MenuAndLogoProps {
    isCollapsed: boolean;
}

export default function MenuAndLogo({ isCollapsed }: MenuAndLogoProps) {
    return (
        <div>
            <Logo isCollapsed={isCollapsed} />
            <Menu isCollapsed={isCollapsed} />
        </div>
    )
}
