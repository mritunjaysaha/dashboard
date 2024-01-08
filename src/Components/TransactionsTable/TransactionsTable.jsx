import { TransactionsTableHeader } from "../TransactionsTableHeader/TransactionsTableHeader";
import styles from "./transactionsTable.module.scss";

export const TransactionsTable = () => {
    return (
        <div className={styles.transactions_table_container}>
            <TransactionsTableHeader />
        </div>
    );
};
