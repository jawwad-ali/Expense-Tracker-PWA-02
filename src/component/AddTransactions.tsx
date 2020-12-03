import React, { useContext, useState } from 'react'
import styles from "./AddTransaction.module.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TransactionContext } from "../Context/GlobalState"

export const AddTransactions: React.FC = () => {

    const [text, setText] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)

    const { addTransaction } = useContext(TransactionContext)

    // form submit function
    const OnSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const newTransAdd = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }
        setText("")
        setAmount(0)
        addTransaction(newTransAdd)
    }

    return (
        <div>
            <div className={styles.formContainer}>
                <form onSubmit={OnSubmit}>
                    <div className={styles.fieldContainer}>
                        <TextField type="text" id="standard-basic" label="Transaction" fullWidth className={styles.inputField}
                            value={text}
                            onChange={(e) => {
                                setText(String(e.target.value));
                            }}
                            autoComplete="off"

                        />
                    </div>
                    <div className={styles.fieldContainer}>
                        <TextField type="number" id="standard-basic" label="Amount" fullWidth className={styles.inputField}
                            value={amount}
                            onChange={(e) => {
                                setAmount(Number(e.target.value));
                            }}
                        />
                        <small>(negative-expense &nbsp; positive-income)</small>
                    </div>
                    <div className={styles.btnContainer}>
                        <Button type="submit" variant="contained" color="primary" className={styles.submitBtn}>
                            Go
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddTransactions