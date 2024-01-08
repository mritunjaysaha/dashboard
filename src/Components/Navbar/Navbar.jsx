import { NavbarSearch } from "../NavbarSearch/NavbarSearch";
import { NavbarUtilsButton } from "../NavbarUtilsButton/NavbarUtilsButton";
import styles from "./navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.nav_div} ${styles.nav_div_payments}`}>
                <p className={styles.payments_title}>Payments</p>
                <p className={styles.text}>
                    <img
                        src="/assets/icons/Question.svg"
                        className={styles.question_icon}
                    />
                    How it works
                </p>
            </div>

            <div className={styles.nav_div}>
                <NavbarSearch />
            </div>
            <div className={`${styles.nav_div} ${styles.nav_div_utils}`}>
                <NavbarUtilsButton
                    icon="/assets/icons/Announcements.svg"
                    name="announcements"
                />
                <NavbarUtilsButton
                    icon="/assets/icons/DownArrowFilled.svg"
                    name="arrow"
                />
            </div>
        </nav>
    );
};
