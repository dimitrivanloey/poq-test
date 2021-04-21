import React from "react";

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
      <div className="App">
        <button onClick={this.handleClick}>
          Remove {this.state.count / 2} selected products
        </button>
        {this.state.list.map((e) => (
          <div key={e.productId}>
            <input
              type="checkbox"
              id={e.productId}
              onChange={this.handleChange}
              name="check"
            />
            <label htmlFor={e.productId}>{e.name}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
