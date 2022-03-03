import styles from "../styles/404.module.css";

const NotFound = () => {
    return (
        <div className={styles.one}>
            <div>
                <h1>404</h1>
                <div className={styles.two}>
                    <h2>Not Found</h2>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
