import React from 'react'
import { IMenuProps } from '../../../utils/interfaces/IMenu'

export const Menu = ({ className, children }: IMenuProps) => {
    return <ul className={className ?? ''}>{children}</ul>
}
