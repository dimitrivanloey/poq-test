import React from 'react'

function StockLevel({quantity}) {
    return (
        <div>
            {quantity === 1 ? 'LOW ON STOCK': 
            quantity === 0 ? 'OUT OF STOCK':
            `${quantity} in stock`}
        </div>
    )
}

export default StockLevel

