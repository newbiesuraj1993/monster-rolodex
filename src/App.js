
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
       <button onClick = {() => this.setState({string : "Hello after click"})}>Change Button</button>
      </div>
    );
  }
}

export default App;
