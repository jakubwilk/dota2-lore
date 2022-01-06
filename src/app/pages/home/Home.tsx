import React from 'react'
import { IHomeProps } from '../../utils/interfaces/IHome'
import styles from './Home.module.scss'

export const HomePage = ({}: IHomeProps) => {
    return (
        <div className={styles.home}>
            <span>{'Home page'}</span>
        </div>
    )
}
