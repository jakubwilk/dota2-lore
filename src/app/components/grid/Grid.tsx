import React from 'react'
import { IGridItemProps, IGridProps } from '../../utils/interfaces/components/IGrid'

// ToDo: In future, if any UI library won't be used, the Grid component with all children must be expanded with some extra options like gridType, gridCol, gridRow, etc.

export const Grid = ({ className, children }: IGridProps) => {
    return <div className={className}>{children}</div>
}

export const GridItem = ({ className, children }: IGridItemProps) => {
    return <div className={className}>{children}</div>
}
