import styles from "./companyIconAndImage.module.scss";

export const CompanyIconAndImage = ({ imgSrc, name }) => {
    return (
        <div className={styles.container}>
            <img src={imgSrc} alt={name} className={styles.logo} />

            <div className={styles.name_container}>
                <p className={styles.name_p}>{name}</p>
                <a className={styles.store_link}>Visit Store</a>
            </div>

            <img
                src="/src/assets/icons/DownArrow.svg"
                className={styles.down_arrow}
            />
        </div>
    );
};
