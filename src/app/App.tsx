import React from 'react'
import logo from '../static/images/dota2_logo.png'
import styles from './App.module.scss'
import { Button } from 'antd'

export const App = () => {
    return (
        <div className={styles.App}>
            <header className={styles.AppHeader}>
                <img src={logo} className={styles.AppLogo} alt={'logo'} />
                <p>
                    {'Edit '}
                    <code>{'src/App.tsx'}</code> {'and save to reload.'}
                </p>
                <a
                    className={styles.AppLink}
                    href={'https://reactjs.org'}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    {'Learn React'}
                </a>
                <Button size={'large'}>{'Antd Custom Button'}</Button>
            </header>
        </div>
    )
}
