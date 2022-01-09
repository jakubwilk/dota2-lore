import { useCallback, useState } from 'react'
import axios from 'axios'
import { TAvailableLanguages } from '../../utils/types/TAvailableLanguages'

export const useReactTranslation = () => {
    const [languagesList, setLanguagesList] = useState<Array<string>>([])
    const [isLanguagesLoaded, setIsLanguagesLoaded] = useState<boolean>(false)
    const languagesListURL = '/languages.json'

    const loadLanguages = useCallback(async () => {
        const response = await axios.get<TAvailableLanguages>(languagesListURL, {
            withCredentials: true,
        })
        setLanguagesList(response.data.languages)
        setIsLanguagesLoaded(true)
    }, [])

    return {
        loadLanguages: loadLanguages,
        languagesList: languagesList,
        isLanguagesLoaded: isLanguagesLoaded,
    }
}
