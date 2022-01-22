import React from 'react'
import { IHomeProps } from '../../utils/interfaces/pages/IHome'
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
                <section>
                    <p>{'Here random 5 heroes'}</p>
                </section>
                <section>
                    <p>{'Here random 4 races'}</p>
                </section>
                <section>
                    <p>{'Here list of regions in slider'}</p>
                </section>
                <section>
                    <p>{'Here random X stories'}</p>
                </section>
            </div>
        </React.Fragment>
    )
}
