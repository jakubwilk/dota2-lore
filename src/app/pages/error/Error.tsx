import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ErrorContext } from '../../context/ErrorContext'
import { IErrorContext } from '../../utils/interfaces/context/IErrorContext'
import { IErrorProps } from '../../utils/interfaces/pages/IError'
import styles from './Error.module.scss'

export const ErrorPage = ({ isActive = false, status, msg }: IErrorProps) => {
    const { state } = useContext<IErrorContext>(ErrorContext)
    const { isErrorPageActive, statusCode, message } = state

    const displayErrorCode = (): number | undefined => {
        if (status) return status

        return statusCode
    }

    const displayErrorMessage = (): string | undefined => {
        if (msg) return msg

        return message
    }

    if (!isErrorPageActive && !isActive) return <Navigate to={'/'} />

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2 className={styles.statusCode}>{displayErrorCode()}</h2>
                <p className={styles.text}>{displayErrorMessage()}</p>
            </div>
        </div>
    )
}
