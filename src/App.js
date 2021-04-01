import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();

  this.state = {
    monsters: [],
    searchField: ' '
  };
  //this.handleChange = this.handleChange.bind(this);
}
handleChange=(value)=>{
   this.setState({searchField:value});
}
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
    }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
      console.log(filteredMonsters, searchField);
  return (
    <div className="App">
      <SearchBox 
      placeholder="search monsters" 
      handleChange={this.handleChange}/>
      <br></br>
  
      <CardList monsters = {filteredMonsters} />
   </div>
  );
}
}

export default App;
