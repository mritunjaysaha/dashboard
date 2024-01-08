import styles from "./overviewCards.module.scss";

export const OverviewCards = ({ name, value }) => {
    return (
        <div className={styles.overview_cards}>
            <p className={styles.overview_title}>{name}</p>
            <p className={styles.overview_value}>{value}</p>
        </div>
    );
};
