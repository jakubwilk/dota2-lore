import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorProvider } from './app/context/ErrorContext'
import { LanguagesProvider } from './app/context/LanguagesContext'
import { NavigationProvider } from './app/context/NavigationContext'
import { App } from './app/App'
import reportWebVitals from './reportWebVitals'
import './i18next'
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
        <HelmetProvider>
            <ErrorProvider>
                <LanguagesProvider>
                    <BrowserRouter>
                        <NavigationProvider>
                            <Suspense fallback={'loading'}>
                                <App />
                            </Suspense>
                        </NavigationProvider>
                    </BrowserRouter>
                </LanguagesProvider>
            </ErrorProvider>
        </HelmetProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
