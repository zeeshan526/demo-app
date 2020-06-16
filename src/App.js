import React from 'react';
import { Header } from './compnents/Header';
import { Balance } from './compnents/Balance';
import { IncomeExpenses } from './compnents/incomeExpenses';
import { Transactionlist } from './compnents/transactionlist';
import { AddTransaction } from './compnents/addTransaction';
import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App() {
  return (
    
    <GlobalProvider>
    <div className="head"><Header/></div>
    <div className="container"></div>
    <Balance/>
    <IncomeExpenses/>
    <Transactionlist/>
    <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
