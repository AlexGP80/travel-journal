import React from "react";
import TravelCard from "./TravelCard";

export default function Main(props) {

    const travelCards = props.data.map(card => 
            <TravelCard
                card = {card}
            />
        )

    return (
        <section className="journal">
            {travelCards}
        </section>
    );
}