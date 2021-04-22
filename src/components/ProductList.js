import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Product from "./Product";
import "./ProductList.styles.css";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch("https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e")
      .then((response) => response.json())
      .then((items) => this.setState({ list: items }));
  }

  handleChange = (e) => {
    const { checked, type, id } = e.target;

    if (type === "checkbox" && checked === true) {
      this.setState((prevState) => prevState.count++);
    } else {
      this.setState((prevState) => prevState.count--);
    }

    this.setState((prevState) => {
      return {
        list: prevState.list.map((li) =>
          li.productId === +id ? { ...li, value: !li.value } : li
        ),
      };
    });
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((li) => !li.value),
        count: 0,
      };
    });
  };

  render() {
    return (
      <div>
        <Button variant="info" onClick={this.handleClick}>
          Remove{" "}
          {this.state.count === 0
            ? "products"
            : this.state.count === 2
            ? `${this.state.count / 2} selected product`
            : `${this.state.count / 2} selected products`}
        </Button>
        <Row>
          {this.state.list.map((product) => (
            <Col key={product.productId} sm={12} md={3} lg={3} xl={3}>
              <Form>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    className="checkBox"
                    type="checkbox"
                    id={product.productId}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProductList;
