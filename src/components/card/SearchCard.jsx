import React, { useEffect, useState } from 'react';
import Form from '../Search/Form';

const SearchCard = () => {




    return (
        <div className='searchCard'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card bg-dark text-white text-center border-0">
                            <div class="card bg-dark text-white">
                                <img class="card-img" src="http://source.unsplash.com/1600x900/?nature,water" alt="card-image" />
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text">Last updated 3 mins ago</p>
                                    </div>
                                </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default SearchCard;

