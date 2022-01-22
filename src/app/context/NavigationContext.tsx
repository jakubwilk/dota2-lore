import React, { createContext, useCallback, useState } from 'react'
import {
    INavigationContext,
    INavigationContextData,
    INavigationContextProvider,
} from '../utils/interfaces/context/INavigationContext'

const defaultContextState: INavigationContextData = {
    isMainNavigationActive: false,
}

export const NavigationContext = createContext<INavigationContext>({
    state: defaultContextState,
    resetContextState: () => {},
    setContextStateValue: <T extends number | string | boolean | undefined | null>(
        contextPropertyName: string,
        value: T
    ) => {},
})

export const NavigationProvider = ({ children }: INavigationContextProvider) => {
    const [contextState, setContextState] = useState<INavigationContextData>(defaultContextState)

    const setContextStateValue = useCallback(
        <T extends number | string | boolean | undefined | null>(
            contextPropertyName: string,
            value: T
        ) => {
            setContextState((prevState) => ({
                ...prevState,
                [contextPropertyName]: value,
            }))
        },
        []
    )

    const resetContextState = useCallback(() => {
        setContextState(defaultContextState)
    }, [])

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
