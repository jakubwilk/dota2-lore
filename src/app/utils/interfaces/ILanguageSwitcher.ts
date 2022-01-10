import { MouseEvent } from 'react'

export interface ILanguageSwitcherProps {}

export interface ILanguageSwitcherItemProps {
    langCode: string
    name: string
    handleChangeLanguage: (e: MouseEvent<HTMLButtonElement>, langCode: string) => void
    switchEnglishLangCode: (langCode: string) => string
}
