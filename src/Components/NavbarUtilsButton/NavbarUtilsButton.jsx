import styles from "./navbarUtilsButton.module.scss";

export const NavbarUtilsButton = ({ icon, name }) => {
    return (
        <button className={styles.navbar_utils_button}>
            <img src={icon} alt={name} className={styles.button_icon} />
        </button>
    );
};
