import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
        <img src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-6902.jpg?size=626&ext=jpg&ga=GA1.2.1913307347.1667763609" alt="" className='header-logo'/>

            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;