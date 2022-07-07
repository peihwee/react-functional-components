import React from 'react';

function NavBar()
{
    return (
        <div id='Nav'>
            <a href='/'>Home</a>
            <a href='/products'>Products</a>
            <a href='/cart'>Cart</a>
            <a href='/profile'>Profile</a>
        </div>
    );
}

export default NavBar;