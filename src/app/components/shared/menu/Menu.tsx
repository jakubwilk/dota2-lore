import React, { Fragment } from 'react'
import { IMenuProps, IMenuItemProps } from '../../../utils/interfaces/IMenu'
import { NavLink } from 'react-router-dom'

export const Menu = ({ className, children }: IMenuProps) => {
    return <ul className={className ?? ''}>{children}</ul>
}

export const MenuItem = ({
    className,
    linkClassName,
    activeLinkClassName,
    linkTitle,
    linkTarget,
    isDisable,
    isEnable,
    children,
}: IMenuItemProps) => {
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
                <Fragment>{children}</Fragment>
            )}
        </li>
    ) : null
}
