import React, { MouseEvent, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationOutlined } from '@ant-design/icons'
import { ILanguageSwitcherProps } from '../../utils/interfaces/ILanguageSwitcher'
import styles from '../main-menu/MainMenu.module.scss'
import { LanguagesContext } from '../../context/LanguagesContext'

export const LanguageSwitcher = ({}: ILanguageSwitcherProps) => {
    const { state } = useContext(LanguagesContext)
    const { t } = useTranslation()
    const { availableLanguages } = state

    const handleOpenLanguageSwitcherBox = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    useEffect(() => {
        console.log(availableLanguages)

        return () => {}
    }, [availableLanguages])

    return (
        <button
            className={styles.menuButtonClose}
            onClick={(e) => handleOpenLanguageSwitcherBox(e)}
        >
            <TranslationOutlined />
            {t('ButtonChangeLanguage')}
        </button>
    )
}
