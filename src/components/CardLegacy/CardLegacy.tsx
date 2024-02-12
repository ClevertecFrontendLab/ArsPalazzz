import React from 'react'
import classes from './cardLegacy.module.css'

interface CardLegacyProps {
    text: React.ReactNode;
    isCollapsed: boolean;
}

export default function CardLegacy({ text, isCollapsed }: CardLegacyProps) {
    return (
        <div className={!isCollapsed ? classes.cardLegacy : classes.cardLegacyCollapsed}>
            <div className={classes.cardBody}>
                <p>{text}</p>
            </div>
        </div>
    )
}
