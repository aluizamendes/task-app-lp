import styles from "./ButtonOutline.module.scss"


export default function ButtonOutline({ children, icon, shadow, display }) {
    return (
        <button 
            className={styles.button}
            style={{ 
                boxShadow: `${shadow == "true" ? "0px 1px 20px 0px rgba(16, 20, 70, 0.288)" : "none"}`,
                display: `${display}`
            }}
        >
            <div style={{ display: `${icon == undefined ? "none" : "block"}` }}>
                {icon}
            </div>
            {children}
        </button>
    )
}