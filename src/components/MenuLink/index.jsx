import styles from "./MenuLink.module.scss"

export default function MenuLink({ children }) {
    return (
        <a 
            className={styles.link}
            href="/"
        >
            {children}
        </a>
    )
}