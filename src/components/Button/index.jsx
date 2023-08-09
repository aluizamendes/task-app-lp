import styles from "./Button.module.scss"

export default function Button({ children, shadow, display }) {
    return (
        <button 
            className={styles.button}
            style={{ 
                boxShadow: `${shadow == "true" ? "0px 1px 20px 0px rgba(16, 20, 70, 0.288)" : "none"}`,
                display: `${display}`
            }}
        >
            {children}
        </button>
    )
}