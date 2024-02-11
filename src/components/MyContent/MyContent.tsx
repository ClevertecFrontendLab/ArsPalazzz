import CardsActions from '@components/CardsActions/CardsActions'
import React from 'react'
import classes from './MyContent.module.css'
import ContentWrap from '@components/ContentWrap/ContentWrap'
import MyFooter from '@components/MyFooter/MyFooter'


interface MyContentProps {
    isCollapsed: boolean;
}

export default function MyContent({ isCollapsed }: MyContentProps) {
    return (
        <div className={classes.myContentContainer}>
            <CardsActions isCollapsed={isCollapsed} />
            <ContentWrap isCollapsed={isCollapsed} />
            <MyFooter isCollapsed={isCollapsed} />
        </div>
    )
}
