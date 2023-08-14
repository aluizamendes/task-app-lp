import ButtonOutline from "../ButtonOutline"
import Container from "../Container"
import Title from "../Title"
import styles from "./SectionDownload.module.scss"
import DownloadIllustration from "./tasks-illustration.svg"
import { AiFillApple, AiFillWindows } from "react-icons/ai"

export default function SectionDownload() {

    const icons = {
        Apple: <AiFillApple />,
        Windows: <AiFillWindows />
    }

    return (
        <section>
            <Container>

                <div className={styles.container}>
                    <div className={styles.content}>
                        <Title>
                            <h2>Try our new software and do tasks instantly with teammates</h2>
                        </Title>
                        <p>
                            Cranberry is built for every member of your project team to plan, manage track, and release great results.
                        </p>

                        <div className={styles.icons}>
                            <ButtonOutline icon={icons.Apple}>
                                Mac OS
                            </ButtonOutline>

                            <ButtonOutline icon={icons.Windows}>
                                Windows
                            </ButtonOutline>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img src={DownloadIllustration} alt="Tasks illustration" />
                    </div>
                </div>

            </Container>
        </section>
    )
}