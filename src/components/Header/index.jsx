import Badge from "../Badge";
import Button from "../Button";
import Title from "../Title";

import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.container}>
            <Badge />

            <Title align="center">
                <h1>Increase productivity to do all the task instantly</h1>
            </Title>

            <p className={styles.subtitle}>
                Cranberry is built for every member of your project team to plan, manage track, and release great results
            </p>

            <div className={styles.trialButton}>
                <Button shadow="true">
                    Start first trial
                </Button>
            </div>
        </header>
    )
}