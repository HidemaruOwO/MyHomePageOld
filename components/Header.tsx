import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <ul>
                    <li className={styles.logo}>
                        <Image
                            src={"/monochrome_slime.svg"}
                            height="100%"
                            width="100%"
                            alt="Logo"
                        />
                    </li>
                    <li className={styles.navigation}>
                        <Link href="https://hide0.net/service">Service</Link>
                    </li>
                    <li className={styles.navigation}>
                        <Link href="https://blog.hide0.net">Blog</Link>
                    </li>
                    <li className={styles.navigation}>
                        <Link href="/app">App</Link>
                    </li>
                    <li className={styles.navigation}>
                        <Link href="/">HOME</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
