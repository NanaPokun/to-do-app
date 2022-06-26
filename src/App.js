import React, { Component } from 'react';
import Ycoders from "./Ycoders";
import AddCoder from './AddCoder';

class App extends Component {
  state = {
    coders : [
      { name: 'Nana', age: 28, belt: 'blue', id: 1 },
      { name: 'Yaw', age: 30, belt: 'black', id: 2 },
      { name: 'Poku', age: 29, belt: 'yellow', id: 3 }
    ]
  }
  addCoder = (coder) => {
    coder.id = Math.random();
    let coders = [...this.state.coders, coder];
    this.setState({
      coders: coders
    })
  }
  deleteCoder = (id) => {
    let coders = this.state.coders.filter(coder => {
      return coder.id !== id
    });
    this.setState({
      coders: coders
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className='App'>
        <h1>My third React app</h1>
        <p>Welcome :)</p>
        <Ycoders deleteCoder={this.deleteCoder} coders={this.state.coders} />
        <AddCoder  addingCoder={this.addCoder} />
      </div>
    );
  }
}

export default App;
