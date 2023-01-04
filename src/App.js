import "./App.css";
import React, { Component } from "react";
import CardList from "./containers/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from './components/Scroll'

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({robots: users}))
  }
  render(){
    const {robots, searchField } = this.state
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField)
    })
    return !robots.length ? 
      <h1>lOADING...</h1>
    :
   (
      <div>
        <div className="tc">
          <h1>Robo friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      </div>
    )
  }
  
}

export default App;
