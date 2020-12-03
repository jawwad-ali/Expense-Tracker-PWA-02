import React, { useContext } from 'react'
import { TransactionContext } from "../Context/GlobalState"
import { TransactionType } from "../Types/Types";
import { TransactionDel } from "./Transaction";

export const TransactionList: React.FC = () => {

    const { Transaction } = useContext(TransactionContext);


    return (
        <div >
            <h2 style={{ fontWeight: "bold" }}>History</h2>

            <ul className="list"> {
                Transaction.map((trans: TransactionType) => (
                    <TransactionDel trans={trans} key={trans.id} />
                ))
            }

            </ul>
        </div>
    )
}