import React, { useState } from 'react';
import './show.css';
import Forms from './form';

export default function Tracker() {
    let [data,setdata]=useState({description: "",amount:null,category:""});
    let handlechange=(event)=>{
        let feild =event.target.name;
        let val=event.target.value;
       
        setdata((currentval)=>{
            currentval[feild]=val;
            return{...currentval}
        });
    }

    let handlesubmit=()=>{
        return{...data}
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
                        <li></li>
                    </ul>
                </div>
               
      <Forms data={data} handlechange={handlechange} handlesubmit={handlesubmit}/>
            </div>
        </>
    );
}
