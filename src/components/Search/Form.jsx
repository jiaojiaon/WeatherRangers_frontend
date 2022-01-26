import React, { useState } from 'react';
import SearchCard from '../card/SearchCard';

export default function Form() {
  
    const [zipcode, setZipcode] =useState('');
    console.log(zipcode)

    const handleSubmit = e => {
        e.preventDefault();
        if (!zipcode || zipcode === '') return;
        
        
    };

    //    async function handleSubmit2(e, value){
//        e.preventDefault();
//        await axios.
//    }
  
    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label='location'
                type='text'
                className='search-form'
                placeholder='Search for location'
                requried
                value={zipcode}
                onChange={e => setZipcode(e.target.value)} />
            <div className='d-flex justify-content-end'></div>
             <button type="button" className='btn btn-primary btn-sm' onClick={handleSubmit} >
                 Search
             </button>
             <SearchCard zipcode={zipcode} />
        </form>
    
       
    
      );
}
