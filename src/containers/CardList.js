import React from "react";
import Card from "../components/Card";

const CardList = ({robots})=>{
    const cardArray = robots.map((card)=>{
        return <Card name={card.name} email={card.email} id={card} key={card.id} />
    })

    return(
        <div>{cardArray}</div>
    )
}

export default CardList;
