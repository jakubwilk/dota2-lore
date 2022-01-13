import { useCallback } from 'react'
import axios, { AxiosError } from 'axios'
import { TAvailableLanguages } from '../../utils/types/TAvailableLanguages'
import { AppError } from '../../utils/helpers/AppError'

export const useReactTranslation = () => {
    const languagesListURL = '/language.json'

    const loadLanguages = useCallback(async (): Promise<TAvailableLanguages> => {
        try {
            const response = await axios.get<TAvailableLanguages>(languagesListURL, {
                withCredentials: true,
            })

            return response.data
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
                -500,
                'Unknown error occurred. Please try load full page again later'
            )
        }
    }, [])

    return {
        loadLanguages: loadLanguages,
    }
}
