import styles from "./Title.module.scss"

export default function Title({ children, align }) {
    return (
        <>
            <div 
                className={styles.title}
                style={{ textAlign: `${align}` }}
            >
                {children} 
            </div>
        </>
    )
}
