import { TransactionsTableSearch } from "../TransactionsTableSearch/TransactionsTableSearch";

import styles from "./transactionsTableHeader.module.scss";

export const TransactionsTableHeader = () => {
    return (
        <div className={styles.table_header}>
            <div className={styles.table_search_container}>
                <TransactionsTableSearch />
            </div>
            <div className={styles.table_utils_container}>
                <button
                    className={`${styles.utils_button} ${styles.utils_sort_button}`}
                >
                    Sort{" "}
                    <img
                        src="/assets/icons/Sort.svg"
                        alt="sort"
                        className={styles.sort_img}
                    />
                </button>
                <button
                    className={`${styles.utils_button} ${styles.utils_download_button}`}
                >
                    <img
                        src="/assets/icons/Download.svg"
                        alt="download"
                        className={styles.download_img}
                    />
                </button>
            </div>
        </div>
    );
};
