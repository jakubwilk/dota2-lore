import React, { Suspense, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useReactTranslation } from './hooks/i18next/useReactTranslation'
import { HomePage } from './pages/home/Home'
import { MainMenu } from './components/main-menu/MainMenu'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { NavigationContext } from './context/NavigationContext'
import styles from './App.module.scss'

export const App = () => {
    const { loadLanguages } = useReactTranslation()
    const { state } = useContext(NavigationContext)
    const { isMainNavigationActive } = state

    useEffect(() => {
        loadLanguages()

        return () => {}
    }, [loadLanguages])

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
                </Routes>
                <Footer />
            </main>
        </Suspense>
    )
}
