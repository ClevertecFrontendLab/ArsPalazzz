import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import classes from './menu.module.css'
import calendar from './icon-wrapper.svg'
import { Button } from 'antd';


interface MyMenuProps {
    isCollapsed: boolean;
}

export default function MyMenu({ isCollapsed }: MyMenuProps) {

    const [hovered, setHovered] = useState(false);

    return (
        // <Menu></Menu>
        <div className={!isCollapsed ? classes.menu : classes.menuSmall}>


            <div><li><img src={calendar} />
                {
                    !isCollapsed ? <p>Календарь</p> : null
                }
            </li></div>
            <div><li><HeartFilled className={!isCollapsed ? classes.antdIcon : classes.antdIconSmall} />
                {
                    !isCollapsed ? <p>Тренировки</p> : null
                }
            </li></div>
            <div><li><TrophyOutlined className={!isCollapsed ? classes.antdIcon : classes.antdIconSmall} />
                {
                    !isCollapsed ? <p>Достижения</p> : null
                }
            </li></div>
            <div><li><IdcardOutlined className={!isCollapsed ? classes.antdIcon : classes.antdIconSmall} />
                {
                    !isCollapsed ? <p>Профиль</p> : null
                }
            </li></div>
            {/* <Button
                style={{
                    background: 'none',
                    border: 'none',
                    borderRight: !hovered ? 'none' : '2px solid black',
                    padding: '0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ><IdcardOutlined className={!isCollapsed ? classes.antdIcon : classes.antdIconSmall} />
                {
                    !isCollapsed ? <p>Профиль</p> : null
                }
            </Button> */}
        </div>
    )
}
