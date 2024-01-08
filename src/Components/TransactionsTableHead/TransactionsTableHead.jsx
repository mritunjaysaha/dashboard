import { useState } from "react";

import styles from "./transactionsTableHead.module.scss";

export const TransactionsTableHead = () => {
    const [isTransactionFeesClicked, setIsTransactionFeesClicked] =
        useState(false);

    const handleTransactionFeesClicked = () => {
        setIsTransactionFeesClicked((prev) => !prev);
    };

    return (
        <thead className={styles.table_head}>
            <tr className={styles.table_head_tr}>
                <th className={styles.table_head_th}>Order ID</th>
                <th className={styles.table_head_th}>
                    Order date{" "}
                    <img
                        src="/assets/icons/DownArrowFilled.svg"
                        alt="arrow"
                        className={styles.th_img}
                    />
                </th>
                <th className={styles.table_head_th}>Order amount</th>
                <th
                    className={styles.table_head_th}
                    onClick={handleTransactionFeesClicked}
                >
                    Transaction fees
                    <img
                        src="/assets/icons/Info.svg"
                        alt="info"
                        className={styles.th_img}
                    />
                    {isTransactionFeesClicked && (
                        <p className={styles.transaction_fees_popup}>
                            Transaction fees are charged as a percentage of the
                            order amount according to your plan.
                        </p>
                    )}
                </th>
            </tr>
        </thead>
    );
};
