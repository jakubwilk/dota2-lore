import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MenuOutlined } from '@ant-design/icons'
import { NavigationContext } from '../../context/NavigationContext'
import { IHeaderProps } from '../../utils/interfaces/IHeader'
import dota2Logo from './../../../static/images/dota2_logo.png'
import styles from './Header.module.scss'

export const Header = ({}: IHeaderProps) => {
    const { t } = useTranslation()
    const { setContextStateValue } = React.useContext(NavigationContext)

    const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setContextStateValue<boolean>('isMainNavigationActive', true)
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <Link className={styles.titleLink} to={'/'}>
                    <img className={styles.logo} src={dota2Logo} alt={'Logo Dota2'} />
                </Link>
            </h1>
            <button className={styles.menuButton} onClick={(e) => handleOpenMenu(e)}>
                <MenuOutlined />
                {t('ButtonOpenMainMenuText')}
            </button>
        </header>
    )
}
