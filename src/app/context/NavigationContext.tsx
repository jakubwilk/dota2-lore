import React from 'react'
import {
    INavigationContext,
    INavigationContextData,
    INavigationContextProvider,
} from '../utils/interfaces/INavigationContext'

const defaultContextState: INavigationContextData = {
    isMainNavigationActive: false,
}

export const NavigationContext = React.createContext<INavigationContext>({
    state: defaultContextState,
    resetContextState: () => {},
    setContextStateValue: <T extends number | string | boolean | undefined | null>(
        contextPropertyName: string,
        value: T
    ) => {},
})

export const NavigationProvider = ({ children }: INavigationContextProvider) => {
    const [contextState, setContextState] =
        React.useState<INavigationContextData>(defaultContextState)

    const setContextStateValue = React.useCallback(
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

    const resetContextState = React.useCallback(() => {
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
