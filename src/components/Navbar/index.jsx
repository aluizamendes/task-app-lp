import Button from "../Button"
import MenuLink from "../MenuLink"
import styles from "./Navbar.module.scss"
import Logo from "./logo.svg"

export default function Navbar() {

    return (
        <>
            <div className={styles.container}>
                <img
                    className={styles.logo}
                    src={Logo}
                    alt="Logo Tarokl"
                />
                <nav className={styles.links}>
                    <MenuLink>Feature</MenuLink>
                    <MenuLink>Price</MenuLink>
                    <MenuLink>About</MenuLink>
                    <MenuLink>Community</MenuLink>
                </nav>

                <div className={styles.signIn}>
                    <Button>
                        Sign In
                    </Button>
                </div>
            </div>
        </>
    )
}