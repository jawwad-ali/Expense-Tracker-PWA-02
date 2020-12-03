import React from 'react';
// import { GlobalProvider } from "./Context/GlobalState"
import { AddTransactions } from "./component/AddTransactions"
import { Balance } from "./component/Balance"
import { IncomeExpense } from "./component/IncomeExpense"
import { TransactionList } from "./component/TransactionList"
import { Header } from "./component/Header"
import { TransactionProvider } from "./Context/GlobalState"

import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <TransactionProvider>
        <div >

          <Header />
          <Balance />
          <TransactionList />
          <IncomeExpense />
          <AddTransactions />
        </div>

      </TransactionProvider>
    </div>
  );
}

export default App;
