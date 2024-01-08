import { OverviewCards } from "../OverviewCards/OverviewCards";
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
            <div className={styles.overview_cards_container}>
                <OverviewCards name="Online orders" value="231" />
                <OverviewCards name="Amount received" value="₹23,92,312.19" />
            </div>
        </div>
    );
};
