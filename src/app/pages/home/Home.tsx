import React from 'react'
import { IHomeProps } from '../../utils/interfaces/IHome'
import { Greetings } from '../../components/greetings/Greetings'
import styles from './Home.module.scss'
import { Container } from '../../components/container/Container'

export const HomePage = ({}: IHomeProps) => {
    return (
        <React.Fragment>
            <div>
                <section className={styles.home}>
                    <Container isFullWidth={false} inheritContainerHeight={true}>
                        <Greetings />
                    </Container>
                </section>
                <span>{'Home page'}</span>
            </div>
        </React.Fragment>
    )
}
