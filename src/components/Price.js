import React from 'react'
import './Price.styles.css'

function Price({price, priceWas}) {
    return (
        <div>
            <span className='price'>£{price}</span>  <span className='priceWas'>£{priceWas}</span>
        </div>
    )
}

export default Price
