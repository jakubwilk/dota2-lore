import React from 'react'
import {
    INavigationContext,
    INavigationContextData,
    INavigationContextProvider,
} from '../utils/interfaces/INavigationContext'
import { TNavigationContextPropertyNameMap } from '../utils/types/TNavigationContext'

const defaultContextState: INavigationContextData = {
    isMainNavigationActive: false,
}

export const NavigationContext = React.createContext<INavigationContext>({
    state: defaultContextState,
    resetContextState: () => {},
    setContextStateValue: (
        contextPropertyName: keyof TNavigationContextPropertyNameMap,
        value: number | string | boolean | undefined | null
    ) => {},
})

export const NavigationProvider = ({ children }: INavigationContextProvider) => {
    const [contextState, setContextState] =
        React.useState<INavigationContextData>(defaultContextState)

    const setContextStateValue = (
        contextPropertyName: keyof TNavigationContextPropertyNameMap,
        value: number | string | boolean | undefined | null
    ) => {
        setContextState((prevState) => ({
            ...prevState,
            [contextPropertyName]: value,
        }))
    }

    const resetContextState = () => {
        setContextState(defaultContextState)
    }

    return (
        <NavigationContext.Provider
            value={{
                state: contextState,
                resetContextState: resetContextState,
                setContextStateValue: setContextStateValue,
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}
