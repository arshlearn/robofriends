import React from "react";
import Card from "./Card";

const CardList = (props) => {
    let CardComponent = props.robots.map((user) => {
        return(
            <Card id={user.id} name={user.name} email={user.email} key={user.id} />
        )
    })

    return (
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList