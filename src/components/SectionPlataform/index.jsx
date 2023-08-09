import Container from "../Container"
import Title from "../Title"
import PlataformImage from "./plataform-image.png"
import styles from "./SectionPlataform.module.scss"

export default function SectionPlataform() {
    return (
        <section className={styles.section}>
            <Container>

                <div className={styles.container}>

                    <div className={styles.image}>
                        <img src={PlataformImage} alt="Plataform" />
                    </div>

                    <div className={styles.content}>
                        <Title>
                            <h2>Get all the task done within a short amount of time</h2>
                        </Title>
                        
                        <p className={styles.content__description}>
                            Cranberry is built for every member of your project team to plan, manage track, and release great results.
                        </p>
                    </div>

                </div>

            </Container>
        </section>
    )
}