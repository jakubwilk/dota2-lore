import React, { Suspense, useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useReactTranslation } from './hooks/i18next/useReactTranslation'
import { LanguagesContext } from './context/LanguagesContext'
import { TAvailableLanguages } from './utils/types/TAvailableLanguages'
import { HomePage } from './pages/home/Home'
import { MainMenu } from './components/main-menu/MainMenu'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { NavigationContext } from './context/NavigationContext'
import styles from './App.module.scss'
import { ErrorPage } from './pages/error/Error'

export const App = () => {
    const { setContextStateValue } = useContext(LanguagesContext)
    const { loadLanguages } = useReactTranslation()
    const { state } = useContext(NavigationContext)
    const { isMainNavigationActive } = state

    useEffect(() => {
        loadLanguages()
            .then((res: TAvailableLanguages) =>
                setContextStateValue('availableLanguages', res.languages)
            )
            .catch((err) => console.log(err.statusCode))

        return () => {}
    }, [loadLanguages, setContextStateValue])

    return (
        <Suspense fallback={'loading'}>
            <Helmet>
                <body data-navigation-active={state.isMainNavigationActive ? 'true' : 'false'} />
            </Helmet>
            <MainMenu />
            <main className={isMainNavigationActive ? styles.panelNavigationActive : styles.app}>
                <Header />
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/error'} element={<ErrorPage />} />
                    <Route
                        path={'*'}
                        element={<ErrorPage isActive={true} status={404} msg={'Not found'} />}
                    />
                </Routes>
                <Footer />
            </main>
        </Suspense>
    )
}
