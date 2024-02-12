import React from 'react'
import exit from './Exit.svg'
import classes from './Exit.module.css'

interface ExitMenuProps {
    isCollapsed: boolean;
}

export default function ExitMenu({ isCollapsed }: ExitMenuProps) {
    return (
        <div className={!isCollapsed ? classes.exitDiv : classes.exitDivSmall}><li><img src={exit} />
            {
                !isCollapsed ? <div><p>Выход</p></div> : null
            }

        </li></div>
    )
}
