import React from "react";

import { Card } from "react-bootstrap";

import StockLevel from './StockLevel'
import Price from './Price'
import PromotionBadge from './PromotionBadge'

function Product({ product }) {
  return (
    <Card className="my-3 p-0 rounded" style={{ height: '40rem' }}>
      <Card.Img src={product.imageUrl} />
      
      <Card.Body>
      <Card.Text as="h3" className="my-3 p-0">
      <PromotionBadge promoBadge={product.promotionBadge}/>
        </Card.Text>
        <Card.Text as="h5">{product.name}</Card.Text>
        <Card.Text as="h4" className="my-3">
            <Price price={product.price} priceWas={product.priceWas}/>
        </Card.Text>
        <Card.Text as="h5" className="my-3">
          <StockLevel quantity={product.quantity} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
