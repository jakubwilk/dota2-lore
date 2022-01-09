import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguagesProvider } from './app/context/LanguagesContext'
import { NavigationProvider } from './app/context/NavigationContext'
import { App } from './app/App'
import reportWebVitals from './reportWebVitals'
import './i18next'
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <LanguagesProvider>
                <BrowserRouter>
                    <NavigationProvider>
                        <App />
                    </NavigationProvider>
                </BrowserRouter>
            </LanguagesProvider>
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
