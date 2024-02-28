import React from 'react'
import exit from './Exit.svg'
import classes from './Exit.module.css'
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/paths.ts';

interface ExitMenuProps {
    isCollapsed: boolean;
}

export default function ExitMenu({ isCollapsed }: ExitMenuProps) {

    const navigate = useNavigate();
    const onLogoutClick = () => {
        localStorage.clear();
        navigate(PATHS.AUTH);
    };

    return (
        <div className={!isCollapsed ? classes.exitDiv : classes.exitDivSmall}><li><img src={exit} />
            {
                !isCollapsed ? <div onClick={onLogoutClick}><p>Выход</p></div> : null
            }

        </li></div>
    )
}
