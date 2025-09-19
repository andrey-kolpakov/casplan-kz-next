import styles from "./page.module.scss";

import {Container} from '@/shared/ui'
import {Header} from './blocks'

export default function Home() {

    return (
        <Container className={styles.page}>
            <Header/>
        </Container>
    );
}
