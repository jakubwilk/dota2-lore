import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/Home'

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
        </Routes>
    )
}
