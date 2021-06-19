
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    string : "Hello from state"
  }
}
  render() {
    return (
      <div className="App">
       <p>Hello From App Component</p>
       <p>{this.state.string}</p>
      </div>
    );
  }
}

export default App;
