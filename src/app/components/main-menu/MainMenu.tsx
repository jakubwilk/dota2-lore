import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavigationContext } from '../../context/NavigationContext'
import { DoubleRightOutlined } from '@ant-design/icons'
import { Menu } from '../shared/menu/Menu'
import { MenuItem } from '../shared/menu/MenuItem'
import { appMenu } from '../../utils/constants/mainMenu'
import styles from './MainMenu.module.scss'

export const MainMenu = () => {
    const { t } = useTranslation()
    const { state, setContextStateValue } = React.useContext(NavigationContext)

    const buildPanelClassName = (): string => {
        if (state.isMainNavigationActive) return `${styles.panel} ${styles.panelActive}`
        return styles.panel
    }

    const handleCloseNavigationPanel = (e: React.MouseEvent<HTMLButtonElement>) => {
        setContextStateValue('isMainNavigationActive', false)
    }

    return (
        <aside className={buildPanelClassName()}>
            <Menu className={styles.menu}>
                {appMenu.map((menuSection, index) => (
                    <React.Fragment key={menuSection.key}>
                        <MenuItem className={styles.menuSeparator} isEnable={true}>
                            {t(menuSection.categoryKey)}
                        </MenuItem>
                        {menuSection.menu.map((menuItem, index) => (
                            <MenuItem
                                key={menuItem.key}
                                className={styles.menuItem}
                                linkClassName={styles.menuLink}
                                activeLinkClassName={styles.menuActiveLink}
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
            <button
                className={styles.menuButtonClose}
                onClick={(e) => handleCloseNavigationPanel(e)}
            >
                <DoubleRightOutlined />
                {t('ButtonCloseMainMenuText')}
            </button>
        </aside>
    )
}
