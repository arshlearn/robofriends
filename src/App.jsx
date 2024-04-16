import React, { useEffect, useState } from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll"
import "./App.css"

const App = () => {

    const [Robots, SetRobots] = useState([])
    const [SearchField, SetSearchField] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        }).then(users => {
            SetRobots(users)
        })
    }, [])

    const OnSearchChange = (event) => {
        SetSearchField(event.target.value)
    }
        const FilteredRobots = Robots.filter(Robot => {
            return (
                Robot.name.toLowerCase().includes(SearchField.toLowerCase())
            )
        })

        if (Robots.length === 0) {
            return <h1 className="tc">Loading...</h1>
        } else {
           return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox SearchChange={OnSearchChange} />
                <Scroll>
                    <CardList robots={FilteredRobots} />
                    <h3>By Arsh Learn</h3>
                </Scroll>
            </div>
        ) 
        }
}
export default App