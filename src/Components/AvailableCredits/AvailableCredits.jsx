import styles from "./availableCredits.module.scss";

export const AvailableCredits = ({ credits }) => {
    return (
        <div className={styles.credits_container}>
            <div className={styles.credits_img_container}>
                <img
                    src="/src/assets/icons/Wallet.svg"
                    alt="wallet"
                    className={styles.credits_img}
                />
            </div>
            <div className={styles.credits_info}>
                <p className={styles.credits_info_title}>Available Credits</p>
                <p className={styles.credits_info_count}>{credits}</p>
            </div>
        </div>
    );
};
