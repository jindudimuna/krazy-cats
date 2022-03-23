import React, { Component } from "react";
import CardLIst from "./CardList";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";
import "./App.css"

class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: " "
        }
    }

    componentDidMount(){
        this.setState({robots: robots})
    }
    onSearchChange =(event) => {
        this.setState({searchfield: event.target.value})
   
    
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            <div className="tc">
                <h1>Krazy Cats</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <Scroll>
            <CardLIst robots= {filteredRobots}/>
            </Scroll>
            </div>
        );
    }

}



export default App;
