import React from "react";

import "./StoclLevel.styles.css";

function StockLevel({ quantity }) {
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
      {quantity === 1 ? lowOnStock : quantity === 0 ? outOfStock : inStock}
    </div>
  );
}

export default StockLevel;
