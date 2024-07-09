import { useState } from "react";

export default function Forms(){
    let [data,setdata]=useState({description: "",amount:null,category:""});
    let handlechange=(event)=>{
        let feild =event.target.name;
        let val=event.target.value;
       
        setdata((currentval)=>{
            currentval[feild]=val;
            return{...currentval}
        });
    }
    return (
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
                         onChange={handlechange}
                         value={data.description}                                               
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
                       value={data.amount}
                       onChange={handlechange} 
                        placeholder="Enter amount"                             required 
                            />
                   </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                      <select 
                      className="form-control" 
                        id="category" 
                         name="category" 
                         onChange={handlechange} 
                        
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
    )
}