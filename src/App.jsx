import React from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll"
import "./App.css"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            SearchField: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(users => {
            this.setState({robots: users})
        })
    }

    OnSearchChange = (event) => {
        this.setState({ SearchField: event.target.value })
    }

    render() {
        const FilteredRobots = this.state.robots.filter(robots => {
            return (
                robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
            )
        })

        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading...</h1>
        } else {
           return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox SearchChange={this.OnSearchChange} />
                <Scroll>
                    <CardList robots={FilteredRobots} />
                    <h3>By Arsh Learn</h3>
                </Scroll>
            </div>
        ) 
        }
    }
}
export default App