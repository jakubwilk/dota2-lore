import React, { Fragment, MouseEvent, useCallback, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationOutlined } from '@ant-design/icons'
import { LanguagesContext } from '../../context/LanguagesContext'
import { LanguageSwitcherItem } from './LanguageSwitcherItem'
import { ILanguageSwitcherProps } from '../../utils/interfaces/ILanguageSwitcher'
import mainMenuStyles from '../main-menu/MainMenu.module.scss'
import styles from './LanguageSwitcher.module.scss'

export const LanguageSwitcher = ({}: ILanguageSwitcherProps) => {
    const { state } = useContext(LanguagesContext)
    const { t, i18n } = useTranslation()
    const { availableLanguages } = state
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpenLanguageSwitcherBox = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    const handleChangeLanguage = useCallback(
        (e: MouseEvent<HTMLButtonElement>, langCode: string) => {
            e.preventDefault()
            i18n.changeLanguage(langCode)
            setIsOpen(false)
        },
        [i18n]
    )

    const switchEnglishLangCode = useCallback((langCode: string) => {
        switch (langCode) {
            case 'en':
                return 'gb'.toUpperCase()
            default:
                return langCode.toUpperCase()
        }
    }, [])

    useEffect(() => {
        return () => {}
    }, [availableLanguages])

    return (
        <Fragment>
            {isOpen ? (
                <div className={styles.box}>
                    {availableLanguages.map((item, index) => (
                        <LanguageSwitcherItem
                            key={index}
                            langCode={item.langCode}
                            name={item.name}
                            handleChangeLanguage={handleChangeLanguage}
                            switchEnglishLangCode={switchEnglishLangCode}
                        />
                    ))}
                </div>
            ) : null}
            <button
                className={mainMenuStyles.menuButtonClose}
                onClick={(e) => handleOpenLanguageSwitcherBox(e)}
            >
                <TranslationOutlined />
                {t('ButtonChangeLanguage')}
            </button>
        </Fragment>
    )
}
