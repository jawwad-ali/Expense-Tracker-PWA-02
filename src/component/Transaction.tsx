import React, { useContext } from "react"
import { TransactionPropType } from "../Types/Types";
import { TransactionContext } from "../Context/GlobalState"
import "./Transaction.css"

export const TransactionDel: React.FC<TransactionPropType> = ({ trans }) => {

    const { deleteTransaction } = useContext(TransactionContext);
    const sign = trans.amount < 0 ? "-" : "+"

    return (
        <div>
            <li className={trans.amount < 0 ? "minus" : "plus"} >
                <button onClick={() => deleteTransaction(trans.id)} className="delete-btn">x</button>
                <span>{trans.text}</span>
                <span> {sign} $ {Math.abs(trans.amount)}</span>
            </li>
        </div>
    )
}