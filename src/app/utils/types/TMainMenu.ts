export type TMainMenuItem = {
    key: number
    href: string
    nameKey: string
    titleKey: string
    isDisable: boolean
    isEnable: boolean
    subMenu?: TMainMenuItem[]
}

export type TMainMenu = TMainMenuItem[]
