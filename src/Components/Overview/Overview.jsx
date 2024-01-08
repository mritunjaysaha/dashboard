import styles from "./overview.module.scss";

export const Overview = () => {
    return (
        <div className={styles.overview_container}>
            <div className={styles.overview_head}>
                <p className={styles.overview_head_title}>Overview</p>
                <button className={styles.dropdown_button}>
                    Last Month
                    <img
                        src="/src/assets/icons/DownArrowDark.svg"
                        alt="arrow"
                        className={styles.dropdown_button_img}
                    />
                </button>
            </div>
        </div>
    );
};
