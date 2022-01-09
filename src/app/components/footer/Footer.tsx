import React from 'react'
import { useTranslation } from 'react-i18next'
import { IFooterProps } from '../../utils/interfaces/IFooter'
import { Container } from '../container/Container'
import { Grid, GridItem } from '../grid/Grid'
import valveLogo from './../../../static/images/valve_logo.png'
import styles from './Footer.module.scss'

export const Footer = ({}: IFooterProps) => {
    const { t } = useTranslation()
    const currentYear: number = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <Container isFullWidth={false} inheritContainerHeight={true}>
                <Grid className={styles.row}>
                    <GridItem className={styles.rowItem}>
                        <p className={styles.text}>
                            <a
                                className={styles.link}
                                href={'https://jakubwilk.pl'}
                                title={'Przejdź do strony jakubwilk.pl'}
                            >
                                &copy; {currentYear} {'jakubwilk.pl'}
                            </a>
                            <br />
                            {'Wszelkie prawa zastrzeżone'}
                        </p>
                    </GridItem>
                    <GridItem className={styles.rowItem}>
                        <p className={styles.text}>
                            {'Inspiracją do stworzenia strony była gra Dota2'}
                            <br />
                            {'opracowana i wydana przez Valve'}
                        </p>
                        <a
                            className={styles.link}
                            href={'https://www.valvesoftware.com/pl/'}
                            title={t('FooterLogoLinkTitleText')}
                        >
                            <img
                                className={styles.logo}
                                src={valveLogo}
                                alt={t('FooterLogoAltText')}
                            />
                        </a>
                    </GridItem>
                </Grid>
            </Container>
        </footer>
    )
}
