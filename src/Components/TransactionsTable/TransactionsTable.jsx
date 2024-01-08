import { TransactionsTableBody } from "../TransactionsTableBody/TransactionsTableBody";
import { TransactionsTableHead } from "../TransactionsTableHead/TransactionsTableHead";
import { TransactionsTableHeader } from "../TransactionsTableHeader/TransactionsTableHeader";
import { TransactionsTablePagination } from "../TransactionsTablePagination/TransactionsTablePagination";
import styles from "./transactionsTable.module.scss";

export const TransactionsTable = () => {
    return (
        <div className={styles.transactions_table_container}>
            <TransactionsTableHeader />
            <table>
                <TransactionsTableHead />
                <TransactionsTableBody />
                <TransactionsTablePagination />
            </table>
        </div>
    );
};
