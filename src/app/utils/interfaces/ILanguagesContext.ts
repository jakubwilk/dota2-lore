import React from 'react'

export interface ILanguagesContext {
    state: ILanguagesContextData
    setContextStateValue: (contextPropertyName: string, value: Array<string>) => void
}

export interface ILanguagesContextData {
    availableLanguages: Array<string>
}

export interface ILanguagesContextProvider {
    children: React.ReactElement | Array<React.ReactElement>
}
