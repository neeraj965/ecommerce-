import React from 'react';

import giphy from './giphy.gif'

const Orders = () => {
   
    return (
        <div>
            <h1 style={{fontSize:"3em",color:'lightgray'}}>Your Order Products: </h1>
            <img src={giphy} alt=""  style={{position:'absolute',margin:'1em 20em'}}/>
        </div>
    );
};

export default Orders;