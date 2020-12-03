import React, { useContext } from 'react'
import styles from "./Balance.module.css"
import { TransactionContext } from "../Context/GlobalState"

export const Balance: React.FC = () => {

    const { Transaction } = useContext(TransactionContext)

    const AllAmounts = Transaction.map((allAmount) => allAmount.amount)
    const total = AllAmounts.reduce((a, b) => (a += b), 0).toFixed(2)

    return (
        <div>
            <h4 className={styles.balance}>${total}</h4>
        </div>
    )
}