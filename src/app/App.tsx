import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/Home'
import { MainMenu } from './components/main-menu/MainMenu'
import { NavigationContext } from './context/NavigationContext'
import styles from './App.module.scss'
import { Helmet } from 'react-helmet-async'
import { Header } from './components/header/Header'

export const App = () => {
    const { state } = React.useContext(NavigationContext)
    const { isMainNavigationActive } = state

    return (
        <React.Suspense fallback={'loading'}>
            <Helmet>
                <body data-navigation-active={state.isMainNavigationActive ? 'true' : 'false'} />
            </Helmet>
            <MainMenu />
            <main className={isMainNavigationActive ? styles.panelNavigationActive : styles.app}>
                <Header />
                <Routes>
                    <Route path={'/'} element={<HomePage />} />
                </Routes>
            </main>
        </React.Suspense>
    )
}
