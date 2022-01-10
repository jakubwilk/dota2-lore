import React from 'react'
import { useTranslation } from 'react-i18next'
import { ILanguageSwitcherItemProps } from '../../utils/interfaces/ILanguageSwitcher'
import styles from './LanguageSwitcher.module.scss'

export const LanguageSwitcherItem = ({
    langCode,
    name,
    handleChangeLanguage,
    switchEnglishLangCode,
}: ILanguageSwitcherItemProps) => {
    const { t } = useTranslation()

    return (
        <button className={styles.buttonOption} onClick={(e) => handleChangeLanguage(e, langCode)}>
            <img
                className={styles.flagImage}
                alt={t(name)}
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${switchEnglishLangCode(
                    langCode
                )}.svg`}
            />
            <span className={styles.text}>{t(name)}</span>
        </button>
    )
}
