import React, { useContext } from 'react'
import { NavigationContext } from '../../context/NavigationContext'

export const HomePage = () => {
    const { setContextStateValue } = useContext(NavigationContext)

    const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setContextStateValue<boolean>('isMainNavigationActive', true)
    }

    return (
        <React.Fragment>
            <p>{'Home page'}</p>
            <button onClick={(e) => handleOpenMenu(e)}>{'Open menu'}</button>
        </React.Fragment>
    )
}
