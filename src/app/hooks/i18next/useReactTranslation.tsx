import { useCallback } from 'react'
import axios from 'axios'
import { TAvailableLanguages } from '../../utils/types/TAvailableLanguages'

export const useReactTranslation = () => {
    const languagesListURL = '/languages.json'

    const loadLanguages = useCallback(async (): Promise<TAvailableLanguages> => {
        const response = await axios.get<TAvailableLanguages>(languagesListURL, {
            withCredentials: true,
        })

        return response.data
    }, [])

    return {
        loadLanguages: loadLanguages,
    }
}
