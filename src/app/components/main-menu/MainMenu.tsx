import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { appMenu } from '../../utils/constants/mainMenu'
import styles from './MainMenu.module.scss'

export const MainMenu = () => {
    const { t } = useTranslation()

    return (
        <ul className={styles.menu}>
            {appMenu.map((menuItem, index) => (
                <React.Fragment key={menuItem.key}>
                    {menuItem.isEnable ? (
                        <li key={menuItem.nameKey} className={styles.menuItem}>
                            <NavLink
                                to={menuItem.href}
                                title={t(menuItem.titleKey)}
                                className={(navData) =>
                                    navData.isActive
                                        ? `${styles.menuLink} ${styles.menuActiveLink}`
                                        : styles.menuLink
                                }
                            >
                                {t(menuItem.nameKey)}
                            </NavLink>
                            {menuItem.subMenu ? (
                                <ul className={styles.menuSubMenu}>
                                    {menuItem.subMenu.map((subMenuItem, index) => (
                                        <li
                                            key={subMenuItem.key}
                                            className={styles.menuSubMenuItem}
                                        >
                                            <NavLink
                                                to={subMenuItem.href}
                                                title={t(subMenuItem.titleKey)}
                                                className={(navData) =>
                                                    navData.isActive
                                                        ? `${styles.menuSubMenuLink} ${styles.menuActiveLink}`
                                                        : styles.menuSubMenuLink
                                                }
                                            >
                                                {t(subMenuItem.nameKey)}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </li>
                    ) : null}
                </React.Fragment>
            ))}
        </ul>
    )
}
