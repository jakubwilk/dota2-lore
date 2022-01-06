import React from 'react'
import { TNavigationContextPropertyNameMap } from '../types/TNavigationContext'

export interface INavigationContext {
    state: INavigationContextData
    resetContextState: () => void
    setContextStateValue: (
        contextPropertyName: keyof TNavigationContextPropertyNameMap,
        value: number | string | boolean | undefined | null
    ) => void
}

export interface INavigationContextData {
    isMainNavigationActive: boolean
}

export interface INavigationContextProvider {
    children: React.ReactElement | Array<React.ReactElement>
}
