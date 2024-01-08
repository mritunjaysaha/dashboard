import styles from "./sidebarNavButton.module.scss";

export const SidebarNavButton = ({ name, icon }) => {
    return (
        <button className={styles.button}>
            <img src={icon} alt={name} className={styles.icon} />
            <p className={styles.name}>{name}</p>
        </button>
    );
};
