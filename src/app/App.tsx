import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/Home'

export const App = () => {
    return (
        <React.Suspense fallback={'loading'}>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
            </Routes>
        </React.Suspense>
    )
}
