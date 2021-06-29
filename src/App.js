
import { Component } from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {

constructor(){
  super();
  this.state = {
    monsters : [{name:'Frankenstein'},{name:'Drac'},{name:'Zombie'}],
    searchfield :''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users}))
}

//arrow helps in defining functions without bidning them explicitly to the contexts. if we dont use, we will have to bind this function inside constructor else it will throw error as
//setstate is undefined. //syenthetic event is the input here
handleChange = (e) => {
  this.setState({searchfield: e.target.value})
}

  render() {
    const {monsters, searchfield} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder ='search for your fav monster' handleChange = {this.handleChange}/>
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
