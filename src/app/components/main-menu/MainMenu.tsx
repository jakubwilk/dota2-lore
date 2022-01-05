import React from 'react'
import { useTranslation } from 'react-i18next'
import { appMenu } from '../../utils/constants/mainMenu'
import styles from './MainMenu.module.scss'
import { NavLink } from 'react-router-dom'
import { Menu } from '../shared/menu/Menu'
import { MenuItem } from '../shared/menu/MenuItem'

export const MainMenu = () => {
    const { t } = useTranslation()

    return (
        <aside>
            <Menu>
                {appMenu.map((menuSection, index) => (
                    <React.Fragment key={menuSection.key}>
                        <MenuItem isEnable={true}>{t(menuSection.categoryKey)}</MenuItem>
                        {menuSection.menu.map((menuItem, index) => (
                            <MenuItem
                                key={menuItem.key}
                                className={'link'}
                                linkClassName={'link'}
                                activeLinkClassName={'link'}
                                linkTarget={menuItem.href}
                                linkTitle={t(menuItem.titleKey)}
                                isEnable={menuItem.isEnable}
                                isDisable={menuItem.isDisable}
                            >
                                {t(menuItem.nameKey)}
                            </MenuItem>
                        ))}
                    </React.Fragment>
                ))}
            </Menu>
        </aside>
    )
}
