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
                href: '/regions/abc',
                nameKey: 'ABC',
                titleKey: 'ABC',
                isDisable: false,
                isEnable: true,
            },
            {
                key: 2,
                href: '/regions/def',
                nameKey: 'DEF',
                titleKey: 'DEF',
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
                href: '/characters',
                nameKey: 'MainMenuCharactersText',
                titleKey: 'MainMenuCharactersTitleText',
                isDisable: true,
                isEnable: true,
            },
            {
                key: 2,
                href: '/characters/heroes',
                nameKey: 'MainMenuCharactersHeroesText',
                titleKey: 'MainMenuCharactersHeroesTitleText',
                isDisable: true,
                isEnable: true,
            },
            {
                key: 3,
                href: '/characters/neutral',
                nameKey: 'MainMenuCharactersNeutralText',
                titleKey: 'MainMenuCharactersNeutralTitleText',
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
                href: '/races/abc',
                nameKey: 'ABC',
                titleKey: 'ABC',
                isDisable: false,
                isEnable: true,
            },
            {
                key: 3,
                href: '/races/def',
                nameKey: 'DEF',
                titleKey: 'DEF',
                isDisable: true,
                isEnable: true,
            },
        ],
    },
]
