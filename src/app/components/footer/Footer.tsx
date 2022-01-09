import React from 'react'
import { useTranslation } from 'react-i18next'
import { IFooterProps } from '../../utils/interfaces/IFooter'
import { Container } from '../container/Container'
import { Grid, GridItem } from '../grid/Grid'
import valveLogo from './../../../static/images/valve_logo.png'
import styles from './Footer.module.scss'

export const Footer = ({}: IFooterProps) => {
    const { t } = useTranslation()

    return (
        <footer>
            <Container isFullWidth={false} inheritContainerHeight={true}>
                <Grid>
                    <GridItem>
                        <p>{'Wszelkie prawa zastrzeżone'}</p>
                    </GridItem>
                    <GridItem>
                        <p>{'Projekt stworzony w oparciu o produkt:'}</p>
                        <a
                            href={'https://www.valvesoftware.com/pl/'}
                            title={t('FooterLogoLinkTitleText')}
                        >
                            <img src={valveLogo} alt={t('FooterLogoAltText')} />
                        </a>
                    </GridItem>
                </Grid>
            </Container>
        </footer>
    )
}
