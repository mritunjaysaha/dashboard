import styles from "./transactionsTableBody.module.scss";

export const TransactionsTableBody = () => {
    return (
        <tbody className={styles.table_body}>
            {[...new Array(19)].map((_, index) => (
                <tr key={index} className={styles.table_body_tr}>
                    <td className={styles.table_body_td}>#281209</td>
                    <td className={styles.table_body_td}>7 July, 2023</td>
                    <td className={styles.table_body_td}>₹1,278.23</td>
                    <td className={styles.table_body_td}>₹22</td>
                </tr>
            ))}
        </tbody>
    );
};
