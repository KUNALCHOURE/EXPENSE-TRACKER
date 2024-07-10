import React, { useState } from 'react';
import './show.css';
import Forms from './form';

export default function Tracker() {
    let [data, setdata] = useState({ description: "", amount: "", category: "" });
    let [expense, setexpense] = useState([]);

    let handlechange = (event) => {
        let field = event.target.name;
        let val = event.target.value;
        console.log(val)
        setdata((currentval) => {
            currentval[field] = val;
            return { ...currentval };
        });
    }

    let handlesubmit = (event) => {
        event.preventDefault();
        setexpense([
            ...expense, {
                description: data.description,
                amount: data.amount,
                category: data.category
            }
        ]);
        console.dir(expense);
        setdata({
            description: "",
            amount: "",
            category: ""
        });
    }

    return (
        <>
            <div className="main">
                <div className="track">
                    <h1>HELLO</h1>
                    <div className="amt">
                        <p>Total:</p>
                        <h2>&#8377;500</h2>
                    </div>
         <ul>
              {expense.map((expense, index) => (
                    <li key={index}>
                      {expense.description} - {expense.amount}
                         <br />
                        {expense.category}
                            </li>
                        ))}
            </ul>
                </div>
                <Forms data={data} handlechange={handlechange} handlesubmit={handlesubmit} />
            </div>
        </>
    );
}
