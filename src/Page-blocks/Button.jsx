import React from 'react'

class ButtonCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
      // Change code above this line
    }
    // Change code below this line
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
    // Change code above this line
    render() {
      return (
        <div className="cart-buttons">
            <figure className="counter">
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='inc' onClick={this.increment}>Increment!</button>
            </figure>
            <p>Items: {this.state.count}</p>
            <button className="add-button">Add to cart</button>
        </div>
      );
    }
  };

  export default ButtonCount