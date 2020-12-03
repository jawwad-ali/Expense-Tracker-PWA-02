import React, { useContext } from 'react'
import styles from "./IncomeExpense.module.css"
import { TransactionContext } from "../Context/GlobalState"

export const IncomeExpense: React.FC = () => {

    const { Transaction } = useContext(TransactionContext);

    const amount = Transaction.map((trans) => trans.amount);

    const income: number = parseInt(
        amount
            .filter((a) => a > 0)
            .reduce((v1, v2) => (v1 += v2), 0)
            .toFixed(2)
    );

    const expense: number = parseInt(
        amount
            .filter((a) => a < 0)
            .reduce((v1, v2) => (v1 += v2 * -1), 0)
            .toFixed(2)
    );

    return (
        <div className={styles.container}>
            <div className={styles.miniContainer}>
                <div className={styles.Income}>
                    Income
                    <span className={styles.Incfigure}>{income}</span>
                </div>
                <div className={styles.expense}>
                    Expense
                    <span className={styles.Expfigure}>{expense}</span>
                </div>
            </div>
        </div>
    )
}



