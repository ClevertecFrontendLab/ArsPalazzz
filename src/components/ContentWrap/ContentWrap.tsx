import classes from './contentWrap.module.css';
import { Space } from 'antd';
import SmallSwapCard from '@components/SmallSwapCard/SmallSwapCard';
import { HeartFilled, IdcardOutlined } from '@ant-design/icons';
import calendar from './wrapper.svg'

interface ContentWrapProps {
    isCollapsed: boolean;
}

export default function ContentWrap({ isCollapsed }: ContentWrapProps) {

    const infoForCards = [
        {
            title: 'Расписать тренировки',
            icon: <HeartFilled className={classes.icon} style={{ color: '#2F54EB', width: '14px', height: '14px' }} />,
            addText: 'Тренировки'
        },
        {
            title: 'Расписать тренировки',
            icon: calendar,
            addText: 'Тренировки'
        },
        {
            title: 'Заполнить профиль',
            icon: <IdcardOutlined className={classes.icon} style={{ color: '#2F54EB', width: '14px', height: '14px' }} />,
            addText: 'Профиль'
        }
    ]


    return (
        <div className={!isCollapsed ? classes.contentWrapContainer : classes.contentWrapContainerCollapsed}>
            <div>
                <Space style={{ marginTop: '24px', marginBottom: '16px' }}>
                    <div className={classes.cardLegacy}>
                        <div className={classes.cardBody}>
                            <h4>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</h4>
                        </div>
                    </div>
                </Space>
                <div className={classes.threeBlockContainer}>
                    <SmallSwapCard infoForCards={infoForCards[0]} isCollapsed={isCollapsed} />
                    <SmallSwapCard infoForCards={infoForCards[1]} isCollapsed={isCollapsed} />
                    <SmallSwapCard infoForCards={infoForCards[2]} isCollapsed={isCollapsed} />
                </div>
            </div>
        </div>
    )
}
