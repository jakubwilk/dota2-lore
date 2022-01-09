import React from 'react'
import { useTranslation } from 'react-i18next'
import { SmallDashOutlined } from '@ant-design/icons'
import { IGreetingsProps } from '../../utils/interfaces/IGreetings'
import styles from './Greetings.module.scss'

export const Greetings = ({}: IGreetingsProps) => {
    const { t } = useTranslation()

    return (
        <div className={styles.greetings}>
            <h2 className={styles.text}>{t('GreetingsWelcomeText')}</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>{'Bohaterowie'}</li>
                <li className={styles.listSeparator}>
                    <SmallDashOutlined />
                </li>
                <li className={styles.listItem}>{'Regiony'}</li>
                <li className={styles.listSeparator}>
                    <SmallDashOutlined />
                </li>
                <li className={styles.listItem}>{'Historie'}</li>
            </ul>
        </div>
    )
}
