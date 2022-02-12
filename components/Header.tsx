import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <ul>
                    <li className={styles.logo}>
                        <img src="/monochrome_slime.svg" height="100%" width="100%"/>
                    </li>
                    <li className={styles.navigation}>
                        <a href="https://hide0.net/service">Service</a>
                    </li>
                    <li className={styles.navigation}>
                        <a href="https://blog.hide0.net">Blog</a>
                    </li>
                    <li className={styles.navigation}>
                        <a href="/app">App</a>
                    </li>
                    <li className={styles.navigation}>
                        <a href="/">HOME</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
