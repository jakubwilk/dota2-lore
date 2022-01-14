import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ErrorContext } from '../../context/ErrorContext'
import { IErrorContext } from '../../utils/interfaces/context/IErrorContext'
import { IErrorProps } from '../../utils/interfaces/pages/IError'
import styles from './Error.module.scss'

export const ErrorPage = ({}: IErrorProps) => {
    const { state } = useContext<IErrorContext>(ErrorContext)
    const { isErrorPageActive, statusCode, message } = state

    if (!isErrorPageActive) return <Navigate to={'/'} />

    return (
        <div className={styles.wrapper}>
            <div>
                <h2>{statusCode}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}
