import React, { createContext, useReducer } from "react"
import { TransactionType, initialType } from "../Types/Types"
import AppReducer from "./AppReducer"

const initialState: initialType = {
    Transaction: [
        { id: 1, text: "Cash", amount: 500 }
    ],
    deleteTransaction: () => { },
    addTransaction: () => { },

}

export const TransactionContext = createContext(initialState)

export const TransactionProvider: React.FC = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id: number) {
        dispatch({
            type: "Delete_Transaction",
            payload: id
        })
    }

    function addTransaction(transactionData: TransactionType) {
        dispatch({
            type: "Add_Transaction",
            payload: transactionData
        })
    }

    return (
        <div>
            <TransactionContext.Provider value={{
                Transaction: state.Transaction,
                deleteTransaction,
                addTransaction
            }}>
                {children}
            </TransactionContext.Provider>
        </div>
    )
}