import React, {useState, useContext} from 'react';

import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState();

    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e =>{
        e.preventDefault();
    const newTransaction ={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    }
    addTransaction(newTransaction);
}

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>


            <div className="form=control">
                <label htmlFor="amount">
                Amount <br/>
                (negative - expense, positive - income)
                </label>
                <input type="number" required="required" value ={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..."/>
            </div>
            <div className="form=control">
                <label htmlFor="text">Text</label>
                <input type="text" required="required" value ={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..."/>
            </div>
            <button  className="btn">Add Transaction</button>

            </form>

        </>
    )
}
