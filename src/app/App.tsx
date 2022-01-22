import React, { Fragment, useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useReactTranslation } from './hooks/i18next/useReactTranslation'
import { LanguagesContext } from './context/LanguagesContext'
import { NavigationContext } from './context/NavigationContext'
import { statusCodes } from './utils/constants/statusCodes'
import { HomePage } from './pages/home/Home'
import { ErrorPage } from './pages/error/Error'
import { MainMenu } from './components/main-menu/MainMenu'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import styles from './App.module.scss'

export const App = () => {
    const { t } = useTranslation()
    const { setContextStateValue } = useContext(LanguagesContext)
    const { loadLanguages } = useReactTranslation()
    const { state } = useContext(NavigationContext)
    const { isMainNavigationActive } = state

    useEffect(() => {
        loadLanguages()

        return () => {}
    }, [loadLanguages, setContextStateValue])

    return (
        <Fragment>
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
                        element={
                            <ErrorPage
                                isActive={true}
                                status={statusCodes.NotFound}
                                msg={t('ErrorPageMessage404Text')}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </main>
        </Fragment>
    )
}
