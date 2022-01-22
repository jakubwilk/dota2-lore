import { useCallback, useContext } from 'react'
import axios, { AxiosError } from 'axios'
import { TAvailableLanguages } from '../../utils/types/TAvailableLanguages'
import { AppError } from '../../utils/helpers/AppError'
import { LanguagesContext } from '../../context/LanguagesContext'
import { statusCodes } from '../../utils/constants/statusCodes'

export const useReactTranslation = () => {
    const { setContextStateValue } = useContext(LanguagesContext)
    const languagesListURL = '/languages.json'

    const loadLanguages = useCallback(async (): Promise<void> => {
        try {
            const response = await axios.get<TAvailableLanguages>(languagesListURL, {
                withCredentials: true,
            })
            const { languages } = response.data

            setContextStateValue('availableLanguages', languages)
        } catch (err: unknown) {
            const error = err as AxiosError

            if (error.response) {
                throw new AppError(
                    error.response.status,
                    'Configuration data from response are not available now. Please try again later when issue will be fixed'
                )
            }

            if (error.request) {
                throw new AppError(
                    error.request.status,
                    'Network error occurred and connection cannot be establish. Please check your Internet connection and try again later'
                )
            }

            throw new AppError(
                statusCodes.Locked,
                'Unknown error occurred. Please try load full page again later'
            )
        }
    }, [setContextStateValue])

    return {
        loadLanguages: loadLanguages,
    }
}
