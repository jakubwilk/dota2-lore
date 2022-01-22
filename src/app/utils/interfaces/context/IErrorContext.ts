import { ReactElement } from 'react'

export interface IErrorContext {
    state: IErrorContextData
    setContextStateValue: (contextPropertyName: string, value: boolean | number | string) => void
}

export interface IErrorContextData {
    isErrorDialogActive: boolean
    isErrorPageActive: boolean
    statusCode: number
    message: string
}

export interface IErrorContextProvider {
    children: ReactElement | Array<ReactElement>
}
