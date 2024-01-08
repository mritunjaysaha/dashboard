import styles from "./navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.nav_div} ${styles.nav_div_payments}`}>
                <p className={styles.payments_title}>Payments</p>
                <p className={styles.text}>
                    <img
                        src="/src/assets/icons/Question.svg"
                        className={styles.question_icon}
                    />
                    How it works
                </p>
            </div>

            <div className={styles.nav_div}></div>
            <div className={styles.nav_div}></div>
        </nav>
    );
};
