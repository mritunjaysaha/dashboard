import styles from "./transactionsTableSearch.module.scss";

export const TransactionsTableSearch = () => {
    return (
        <div className={styles.transactions_search}>
            <img
                src="/assets/icons/Search.svg"
                alt="search"
                className={styles.search_icon}
            />
            <input
                placeholder="Search by order ID..."
                className={styles.search_input}
            />
        </div>
    );
};
