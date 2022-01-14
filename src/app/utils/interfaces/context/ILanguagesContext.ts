import React from 'react'
import { TAvailableLanguagesItem } from '../../types/TAvailableLanguages'

export interface ILanguagesContext {
    state: ILanguagesContextData
    setContextStateValue: (
        contextPropertyName: string,
        value: Array<TAvailableLanguagesItem>
    ) => void
}

export interface ILanguagesContextData {
    availableLanguages: Array<TAvailableLanguagesItem>
}

export interface ILanguagesContextProvider {
    children: React.ReactElement | Array<React.ReactElement>
}
