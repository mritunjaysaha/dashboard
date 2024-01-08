import styles from "./navbarSearch.module.scss";

export const NavbarSearch = () => {
    return (
        <div className={styles.search_container}>
            <img
                src="/src/assets/icons/Search.svg"
                alt="search"
                className={styles.search_icon}
            />
            <input
                placeholder="Search features, tutorials, etc."
                className={styles.search_input}
            />
        </div>
    );
};
