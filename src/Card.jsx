import React, { Component } from "react";
import "./styles.css";

const CardHeader = () => <header className="card-header">Card Title</header>;

class CardSection extends Component {
  render() {
    return <section className="card-content">{this.props.counter}</section>;
  }
}

const CardFooter = ({ onIncrement, onDecrement }) => {
  return (
    <footer className="Card-footer">
      <button type="button" className="btn" onClick={onIncrement}>
        +
      </button>
      <button type="button" className="btn" onClick={onDecrement}>
        -
      </button>
    </footer>
  );
};

class Card extends Component {
  state = {
    counter: 10
  };

  onIncrement = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  };

  onDecrement = () => {
    if (this.state.counter === 0) return false;

    this.setState((state) => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <article className="container">
        <CardHeader />
        <CardSection counter={this.state.counter} />
        <CardFooter
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </article>
    );
  }
}

export default Card;
