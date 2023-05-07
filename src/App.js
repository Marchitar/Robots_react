import React, { Component } from "react";
import Card_list from "./Card_list";
import { robots } from "./robots";
import SearchBox from "./searchBox";
import Scroll from "./scroll";

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`).then((Response) =>{
      return Response.json()}).then(users =>{this.setState({robots: users})})
  }
 

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    })
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else{
      return (
        <div className="tc">
           <h1> KITTY CAT FRIENDS</h1>
           <SearchBox searchChange={this.onSearchChange}/>
           <Scroll>
            <Card_list robots={filteredRobots}/>
           </Scroll>         
        </div>
      );
    }
  }
}

export default App;
