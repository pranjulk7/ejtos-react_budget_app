import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext); // Adjusted destructuring

    const [newCurrency, setNewCurrency] =useState(currency);
    
    const handleChange = (event) => {
        const selectedCurrency = event.target.value;
        setNewCurrency(selectedCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };
    
    return (
        <>
            <div className='alert alert-success'>
                <label>Currency: {newCurrency}</label>
                <select  id="dropdown" value={newCurrency} onChange={handleChange}>
                    <option value="$">Dollar </option>
                    <option value="€">Euro </option>
                    <option value="£">Pound</option>
                    <option value="₹">Rupee</option>
                </select>
            </div>
            <br/>
        </>
    );
}

export default Currency;
