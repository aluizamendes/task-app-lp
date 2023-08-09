import Button from "../Button";
import Container from "../Container";
import Title from "../Title";

import styles from "./SectionFeature.module.scss"

export default function SectionFeature({ direction, title, content, contentButton, displayButton, image }) {
    return (
        <section>
            <Container>

                <div className={styles.container} style={{ flexDirection: `${direction}` }}>
                    <div className={styles.content}>
                        <Title>
                            <h2>{title}</h2>
                        </Title>
                        <p>
                            {content}
                        </p>

                        <Button
                            shadow="false"
                            display={displayButton}
                        >
                            {contentButton}
                        </Button>
                    </div>

                    <div className={styles.image}>
                        <img src={`../../../public/${image}`} />
                    </div>
                </div>

            </Container>
        </section>
    )
}