import React from "react";

import { Card } from "react-bootstrap";

import StockLevel from './StockLevel'

function Product({ product }) {
  return (
    <Card className="my-3 p-0 rounded">
      <Card.Img src={product.imageUrl} />
      <Card.Body>
      <Card.Text as="div" className="my-3">
          {product.promotionBadge}
        </Card.Text>
        <Card.Text as="h5">{product.name}</Card.Text>
        <Card.Text as="div" className="my-3">
          £{product.price} £{product.price}
        </Card.Text>
        <Card.Text as="div" className="my-3">
          <StockLevel quantity={product.quantity} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
