import React, { createContext, useCallback, useState } from 'react'
import {
    IErrorContext,
    IErrorContextData,
    IErrorContextProvider,
} from '../utils/interfaces/context/IErrorContext'

const defaultContextState: IErrorContextData = {
    isErrorDialogActive: false,
    isErrorPageActive: false,
    statusCode: -100,
    message: '',
}

export const ErrorContext = createContext<IErrorContext>({
    state: defaultContextState,
    setContextStateValue: (contextPropertyName: string, value: boolean | number | string) => {},
})

export const ErrorProvider = ({ children }: IErrorContextProvider) => {
    const [contextState, setContextState] = useState<IErrorContextData>(defaultContextState)

    const setContextStateValue = useCallback(
        (contextPropertyName: string, value: boolean | number | string) => {
            setContextState((prevState) => ({
                ...prevState,
                [contextPropertyName]: value,
            }))
        },
        []
    )

    return (
        <ErrorContext.Provider
            value={{ state: contextState, setContextStateValue: setContextStateValue }}
        >
            {children}
        </ErrorContext.Provider>
    )
}
