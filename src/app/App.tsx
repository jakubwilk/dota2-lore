import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/Home'
import { MainMenu } from './components/main-menu/MainMenu'

export const App = () => {
    return (
        <React.Suspense fallback={'loading'}>
            <MainMenu />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
            </Routes>
        </React.Suspense>
    )
}
