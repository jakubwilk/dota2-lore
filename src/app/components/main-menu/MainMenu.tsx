import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { appMenu } from '../../utils/constants/mainMenu'
import styles from './MainMenu.module.scss'
import { CaretDownOutlined } from '@ant-design/icons'

export const MainMenu = () => {
    const { t } = useTranslation()

    const createLinkClassName = (
        isActive: boolean,
        isDisabled: boolean,
        linkClassName: string,
        activeLinkClassName: string
    ): string => {
        if (isDisabled) return `${linkClassName} ${styles.menuDisabledLink}`

        if (isActive) return `${linkClassName} ${activeLinkClassName}`

        return linkClassName
    }

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
                                    createLinkClassName(
                                        navData.isActive,
                                        menuItem.isDisable,
                                        styles.menuLink,
                                        styles.menuActiveLink
                                    )
                                }
                            >
                                {t(menuItem.nameKey)}
                                {menuItem.subMenu ? <CaretDownOutlined /> : null}
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
                                                    createLinkClassName(
                                                        navData.isActive,
                                                        menuItem.isDisable,
                                                        styles.menuSubMenuLink,
                                                        styles.menuActiveSubLink
                                                    )
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
