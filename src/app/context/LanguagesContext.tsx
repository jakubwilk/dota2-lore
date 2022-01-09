import React, { createContext, useCallback, useState } from 'react'
import {
    ILanguagesContext,
    ILanguagesContextData,
    ILanguagesContextProvider,
} from '../utils/interfaces/ILanguagesContext'

const defaultContextState: ILanguagesContextData = {
    availableLanguages: [],
}

export const LanguagesContext = createContext<ILanguagesContext>({
    state: defaultContextState,
    setContextStateValue: (contextPropertyName: string, value: Array<string>) => {},
})

export const LanguagesProvider = ({ children }: ILanguagesContextProvider) => {
    const [contextState, setContextState] = useState<ILanguagesContextData>(defaultContextState)

    const setContextStateValue = useCallback(
        (contextPropertyName: string, value: Array<string>) => {
            setContextState((prevState) => ({
                ...prevState,
                [contextPropertyName]: value,
            }))
        },
        []
    )

    return (
        <LanguagesContext.Provider
            value={{
                state: contextState,
                setContextStateValue: setContextStateValue,
            }}
        >
            {children}
        </LanguagesContext.Provider>
    )
}
