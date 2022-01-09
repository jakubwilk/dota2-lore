import React from 'react'
import { useTranslation } from 'react-i18next'
import { MenuOutlined } from '@ant-design/icons'
import { NavigationContext } from '../../context/NavigationContext'
import { IHeaderProps } from '../../utils/interfaces/IHeader'
import dota2Logo from './../../../static/images/dota2_logo.png'
import styles from './Header.module.scss'
import { Container } from '../container/Container'

export const Header = ({}: IHeaderProps) => {
    const { t } = useTranslation()
    const { setContextStateValue } = React.useContext(NavigationContext)

    const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setContextStateValue<boolean>('isMainNavigationActive', true)
    }

    return (
        <header className={styles.header}>
            <Container isFullWidth={true} inheritContainerHeight={true}>
                <div className={styles.row}>
                    <h1 className={styles.title}>
                        <a
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
