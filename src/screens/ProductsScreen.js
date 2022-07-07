import React from 'react';

function ProductsScreen()
{
    const aList = [];

    for (var i=0; i<10; i++) 
    {
        aList.push(<li key={i}><a href={'products/'+i}>Item {i}</a></li>);
    }

    return (
        <div className='Main'>
            <h1>ProductScreen</h1>
            <ul>{aList}</ul>
        </div>
    );

}

export default ProductsScreen;