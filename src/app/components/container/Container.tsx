import React from 'react'
import { IContainerProps } from '../../utils/interfaces/IContainer'
import styles from './Container.module.scss'

export const Container = ({
    isFullWidth,
    children,
    inheritContainerHeight,
    containerClassName,
}: IContainerProps) => {
    if (isFullWidth)
        return (
            <div
                className={`${styles.containerFluid} ${containerClassName ?? ''}`}
                data-inherit-height={inheritContainerHeight ? 'true' : 'false'}
            >
                {children}
            </div>
        )

    return (
        <div
            className={`${styles.containerFixed} ${containerClassName ?? ''}`}
            data-inherit-height={inheritContainerHeight ? 'true' : 'false'}
        >
            {children}
        </div>
    )
}
