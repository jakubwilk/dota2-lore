import React from 'react'

export interface IContainerProps {
    isFullWidth: boolean
    containerClassName?: string
    inheritContainerHeight: boolean
    children: Array<React.ReactElement> | React.ReactElement
}
