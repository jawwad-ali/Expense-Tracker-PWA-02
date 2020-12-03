export type initialType = {
    Transaction: {
        id: number
        text: string
        amount: number
    }[]
    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: TransactionType) => void;

}

export type TransactionType = {
    id: number
    text: string
    amount: number
}
export type TransactionPropType = {
    trans: { id: number; text: string; amount: number };
};