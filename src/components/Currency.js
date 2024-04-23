import React, {useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [selectedOption, setSelectedOption] = useState('Dollar');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };
    return(
        <>
        <div>
            <label>Currency: {selectedOption.toUpperCase()}</label>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="dollar">$ Dollar </option>
        <option value="euro">€ Euro </option>
        <option value="pound">£ Pound</option>
        <option value="rupee">₹ Rupee</option>
      </select>
            
        </div>
        <br/>
        </>

    );

}
export default Currency;
