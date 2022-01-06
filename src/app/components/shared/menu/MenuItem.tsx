import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMenuItem } from '../../../utils/interfaces/IMenuItem'

export const MenuItem = ({
    className,
    linkClassName,
    activeLinkClassName,
    linkTitle,
    linkTarget,
    isDisable,
    isEnable,
    children,
}: IMenuItem) => {
    const isLink = (): boolean => {
        if (linkClassName && activeLinkClassName && linkTarget) return true

        return false
    }

    return isEnable ? (
        <li className={className}>
            {isLink() ? (
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${linkClassName} ${activeLinkClassName}`
                            : `${linkClassName}`
                    }
                    to={linkTarget as string}
                    title={linkTitle}
                    data-disable={isDisable}
                >
                    {children}
                </NavLink>
            ) : (
                <React.Fragment>{children}</React.Fragment>
            )}
        </li>
    ) : null
}
