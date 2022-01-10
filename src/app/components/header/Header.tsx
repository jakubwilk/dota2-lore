import React, { MouseEvent, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuOutlined } from '@ant-design/icons'
import { NavigationContext } from '../../context/NavigationContext'
import { IHeaderProps } from '../../utils/interfaces/IHeader'
import { Container } from '../container/Container'
import dota2Logo from './../../../static/images/dota2_logo.png'
import styles from './Header.module.scss'

export const Header = ({}: IHeaderProps) => {
    const { t } = useTranslation()
    const { setContextStateValue } = useContext(NavigationContext)

    const handleOpenMenu = (e: MouseEvent<HTMLButtonElement>) => {
        setContextStateValue<boolean>('isMainNavigationActive', true)
    }

    return (
        <header className={styles.header}>
            <Container isFullWidth={true} inheritContainerHeight={true}>
                <div className={styles.row}>
                    <h1 className={styles.title}>
                        <a
                            className={styles.titleLink}
                            href={'https://dota2.com/'}
                            title={t('SharedLogoLinkTitleText', { 1: 'dota2.com' })}
                        >
                            <img
                                className={styles.logo}
                                src={dota2Logo}
                                alt={t('HeaderLogoAltText')}
                            />
                        </a>
                    </h1>
                    <button className={styles.menuButton} onClick={(e) => handleOpenMenu(e)}>
                        <MenuOutlined />
                        {t('ButtonOpenMainMenuText')}
                    </button>
                </div>
            </Container>
        </header>
    )
}
