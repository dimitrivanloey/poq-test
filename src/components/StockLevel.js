import React from "react";

import "./StoclLevel.styles.css";

function StockLevel({ quantity, lowStock}) {
  const inStock = <div className="inStock">{quantity} in stock</div>;
  const lowOnStock = (
    <div>
      <div>{inStock}</div>
      <div className="lowOnStock">LOW ON STOCK</div>
    </div>
  );
  const outOfStock = <div className="outOfStock">OUT OF STOCK</div>;

  return (
    <div>
      {lowStock === 'FALSE' && quantity !== 0 ? inStock : quantity === 0 ? outOfStock: lowOnStock}
    </div>
  );
}

export default StockLevel;
