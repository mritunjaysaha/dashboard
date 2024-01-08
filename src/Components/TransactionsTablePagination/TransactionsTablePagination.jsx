import styles from "./transactionsTablePagination.module.scss";

export const TransactionsTablePagination = () => {
    return (
        <div className={styles.table_pagination}>
            <button
                className={`${styles.pagination_button} ${styles.previous_button}`}
            >
                <img src="/assets/icons/LeftArrowDark.svg" alt="previous" />
                Previous
            </button>
            <div className={styles.pagination_pages_container}>
                <button className={styles.page_button}>1</button>
                <button className={styles.page_button}>...</button>
                <button
                    className={`${styles.page_button} ${styles.page_button_active}`}
                >
                    10
                </button>
                {[...new Array(8)].map((_, index) => (
                    <button key={index} className={styles.page_button}>
                        {index + 11}
                    </button>
                ))}
            </div>
            <button
                className={`${styles.pagination_button} ${styles.next_button}`}
            >
                Next
                <img src="/assets/icons/RightArrowDark.svg" alt="next" />
            </button>
        </div>
    );
};
