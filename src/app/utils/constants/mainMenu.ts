import { TMainMenu } from '../types/TMainMenu'

export const appMenu: TMainMenu[] = [
    {
        key: 1,
        categoryKey: 'MainMenuCategoryDefaultText',
        menu: [
            {
                key: 1,
                href: '/',
                nameKey: 'MainMenuHomeText',
                titleKey: 'MainMenuHomeTitleText',
                isDisable: false,
                isEnable: true,
            },
        ],
    },
    {
        key: 2,
        categoryKey: 'MainMenuCategoryWorldText',
        menu: [
            {
                key: 1,
                href: '/regions/valoran',
                nameKey: 'MainMenuRegionsValoranText',
                titleKey: 'MainMenuRegionsValoranTitleText',
                isDisable: false,
                isEnable: true,
            },
        ],
    },
    {
        key: 3,
        categoryKey: 'MainMenuCategoryCharactersText',
        menu: [
            {
                key: 1,
                href: '/heroes',
                nameKey: 'MainMenuHeroesText',
                titleKey: 'MainMenuHeroesTitleText',
                isDisable: true,
                isEnable: true,
            },
        ],
    },
    {
        key: 4,
        categoryKey: 'MainMenuCategoryRacesText',
        menu: [
            {
                key: 1,
                href: '/races',
                nameKey: 'MainMenuRacesText',
                titleKey: 'MainMenuRacesTitleText',
                isDisable: false,
                isEnable: true,
            },
            {
                key: 2,
                href: '/races/orc',
                nameKey: 'MainMenuRacesOrcText',
                titleKey: 'MainMenuRacesOrcTitleText',
                isDisable: false,
                isEnable: true,
            },
            {
                key: 3,
                href: '/races/drow',
                nameKey: 'MainMenuRacesDrowText',
                titleKey: 'MainMenuRacesDrowTitleText',
                isDisable: true,
                isEnable: true,
            },
        ],
    },
]
