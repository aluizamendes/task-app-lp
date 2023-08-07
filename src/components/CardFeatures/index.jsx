import Container from "../Container"
import Title from "../Title"
import styles from "./CardFeatures.module.scss"
import FeatureImage1 from "./feature-image-1.png"

export default function CardFeatures() {
    return (
        <section className={styles.section_container}>
            <Container>
                <div className={styles.card}>
                    <div className={styles.card__content}>
                        <Title>
                            <h2>Boost your productivity everyday</h2>
                        </Title>
                        <ul>
                            <li>
                                <div className={styles.titleContainer}>
                                    <div className={styles.circle} style={{ backgroundColor: "#FE7191" }}></div>
                                    <Title>
                                        <h3>Task time planning</h3>
                                    </Title>
                                </div>
                                <p>Every member of your project team to plan, manage track and release</p>
                            </li>

                            <li>
                                <div className={styles.titleContainer}>
                                    <div className={styles.circle} style={{ backgroundColor: "#6C56C2" }}></div>
                                    <Title>
                                        <h3>Customizable views</h3>
                                    </Title>
                                </div>
                                <p>Built for every member of your project team to plan, manage track, release</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.card__image}>
                        <img src={FeatureImage1} />
                    </div>
                </div>
            </Container>
        </section>
    )
}