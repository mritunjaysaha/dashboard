import { TransactionsTable } from "../TransactionsTable/TransactionsTable";
import styles from "./transactions.module.scss";

export const Transactions = () => {
    return (
        <div className={styles.transactions_container}>
            <p className={styles.transactions_title}>
                Transactions | This Month
            </p>
            <TransactionsTable />
        </div>
    );
};
