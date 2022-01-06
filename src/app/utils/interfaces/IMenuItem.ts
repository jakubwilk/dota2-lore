export interface IMenuItem {
    className?: string
    linkClassName?: string
    activeLinkClassName?: string
    isEnable?: boolean
    isDisable?: boolean
    linkTarget?: string
    linkTitle?: string
    children: JSX.Element | JSX.Element[]
}
