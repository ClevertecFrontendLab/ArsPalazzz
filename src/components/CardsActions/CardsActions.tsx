import React from 'react'
import classes from './CardsActions.module.css'
import CardLegacy from '@components/CardLegacy/CardLegacy'

interface CardsActionsProps {
    isCollapsed: boolean;
}

export default function CardsActions({ isCollapsed }: CardsActionsProps) {

    const textForCard = (
        <>
            С CleverFit ты сможешь:<br /> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;<br /> — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;<br /> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;<br /> — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.
        </>
    )



    return (
        <div className={!isCollapsed ? classes.cardsActionsContainer : classes.cardsActionsContainerCollapsed}>
            <CardLegacy text={textForCard} isCollapsed={isCollapsed} />
        </div>
    )
}
