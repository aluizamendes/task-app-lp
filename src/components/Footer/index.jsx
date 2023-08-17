import Container from "../Container"
import Logo from "/logo.svg"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"
import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer>
            <Container>
                <div className={styles.container}>
                    <div className={styles.social}>
                        <img src={Logo} alt="" />
                        <div className={styles.social__container}>
                            <AiFillFacebook color="#282F37" size={24} />
                            <AiFillInstagram color="#282F37" size={24} />
                            <AiFillTwitterSquare color="#282F37" size={24} />
                        </div>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.column__title}>Company</p>
                        <ul>
                            <li><a href="/">Our team</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Partnership</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.column__title}>Support</p>
                        <ul>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Submit form</a></li>
                            <li><a href="/">Get in touch</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.column__title}>Legal</p>
                        <ul>
                            <li><a href="/">Privacy policy</a></li>
                            <li><a href="/">Term of condition</a></li>
                            <li><a href="/">Partnership</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.column__title}>Get in touch</p>
                        <p className={styles.column__description}>Make an appoinment with our salesman anywhere, anytime via Online and get the best product from us</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}