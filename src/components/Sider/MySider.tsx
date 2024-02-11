import React from 'react'
import MenuAndLogo from '../MenuAndLogo'
import ExitMenu from '../ExitMenu/ExitMenu'
import SwitchSiderButton from '../SwitchSiderButton/SwitchSiderButton'
import classes from './MySider.module.css';

interface MySiderProps {
    isCollapsed: boolean;
    setCollapse: () => void;
}

export default function MySider({ isCollapsed, setCollapse }: MySiderProps) {
    return (
        <div className={!isCollapsed ? classes.siderInner : classes.siderCollapsedInner}>
            <div className={classes.siderRelative}>
                <MenuAndLogo isCollapsed={isCollapsed} />
                <ExitMenu isCollapsed={isCollapsed} />
            </div>
            <SwitchSiderButton setCollapse={setCollapse} isCollapsed={isCollapsed} />
        </div>
    )
}
