export interface IMenuProps {
    className?: string
    children: JSX.Element | JSX.Element[]
}

export interface IMenuItemProps {
    className?: string
    linkClassName?: string
    activeLinkClassName?: string
    isEnable?: boolean
    isDisable?: boolean
    linkTarget?: string
    linkTitle?: string
    children: JSX.Element | JSX.Element[]
}
