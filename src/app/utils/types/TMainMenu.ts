export type TMainMenuItem = {
    key: number
    href: string
    nameKey: string
    titleKey: string
    isDisable: boolean
    isEnable: boolean
}

export type TMainMenu = {
    key: number
    categoryKey: string
    menu: TMainMenuItem[]
}
