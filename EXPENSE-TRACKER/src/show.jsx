import React, { useState } from 'react';
import './show.css';

export default function Tracker() {
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
                        <li></li>
                    </ul>
                </div>
               
    <div className="form">
       <h2>ADD A TRANSACTION</h2>
          <form onSubmit className="p-3  rounded">

                 <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                     <input 
                    type="text" 
                            className="form-control" 
                          id="description" 
                         name="description"                                                  
                       placeholder="Enter expense description" 
                                required 
                            />
                </div>
              <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount</label>
                     <input 
                          type="number" 
                        className="form-control" 
                           id="amount" 
                        name="amount" 
                       value
                        placeholder="Enter amount"                             required 
                            />
                   </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                      <select 
                      className="form-control" 
                        id="category" 
                         name="category" 
                        value 
                     required
                        >

                      <option value="">Select category</option>
                    <option value="Food">Food</option>
                          <option value="Transportation">Transportation</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Expense</button>
                    </form>
                </div>
            </div>
        </>
    );
}
