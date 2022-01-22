import React from 'react'

export interface INavigationContext {
    state: INavigationContextData
    resetContextState: () => void
    setContextStateValue: <T extends number | string | boolean | undefined | null>(
        contextPropertyName: string,
        value: T
    ) => void
}

export interface INavigationContextData {
    isMainNavigationActive: boolean
}

export interface INavigationContextProvider {
    children: React.ReactElement | Array<React.ReactElement>
}
