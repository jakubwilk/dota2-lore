import { TMainMenu } from '../types/TMainMenu'

export const appMenu: TMainMenu = [
    {
        key: 1,
        href: '/',
        nameKey: 'MainMenuHomeText',
        titleKey: 'MainMenuHomeTitleText',
        isDisable: false,
        isEnable: true,
    },
    {
        key: 2,
        href: '/heroes',
        nameKey: 'MainMenuHeroesText',
        titleKey: 'MainMenuHeroesTitleText',
        isDisable: true,
        isEnable: true,
    },
    {
        key: 3,
        href: '/races',
        nameKey: 'MainMenuRacesText',
        titleKey: 'MainMenuRacesTitleText',
        isDisable: false,
        isEnable: true,
        subMenu: [
            {
                key: 4,
                href: '/races/orc',
                nameKey: 'MainMenuRacesOrcText',
                titleKey: 'MainMenuRacesOrcTitleText',
                isDisable: false,
                isEnable: true,
            },
            {
                key: 5,
                href: '/races/drow',
                nameKey: 'MainMenuRacesDrowText',
                titleKey: 'MainMenuRacesDrowTitleText',
                isDisable: true,
                isEnable: true,
            },
        ],
    },
    {
        key: 6,
        href: '/regions',
        nameKey: 'MainMenuRegionsText',
        titleKey: 'MainMenuRegionsTitleText',
        isDisable: false,
        isEnable: true,
    },
]
