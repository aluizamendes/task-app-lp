import Container from "../Container"
import FaqQuestion from "../FaqQuestion"
import Title from "../Title"
import styles from "./Faq.module.scss"

export default function Faq() {
    return (
        <section className={styles.container}>
            <Container>

                <Title align="center">
                    <h2>Frequently asked questions and answers</h2>
                </Title>

                <div className={styles.container__questions}>
                    <FaqQuestion question="How does this website work?" />
                    <FaqQuestion question="How to connect member?" />
                    <FaqQuestion question="Is it totally free?" />
                    <FaqQuestion question="Can I add more than 10 people?" />
                </div>

            </Container>
        </section>
    )
}