import Title from "../Title";
import styles from "./FaqQuestion.module.scss"

export default function FaqQuestion({ question }) {
    return (

        <div>
            <Title>
                <h4>{question}</h4>
            </Title>
            <p className={styles.answer}>Cranberry is built for every member of your project team to plan, manage track, and release great results.</p>
        </div>
    )
}