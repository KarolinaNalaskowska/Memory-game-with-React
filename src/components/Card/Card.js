import React from "react";
import "./_card.scss";

export default function Card ({ onClick, card, index, isInactive, flipped, isDisabled }) {

    const handleClick = () => {
        onClick(index);
        if(flipped === true) {
            console.log("a")
        } else {
            console.log("b")
        }
    }

    return (
        <div className="grid card" onClick={handleClick} >
            <div className="card__image card__image-revers">
                <img src="images/cover.png" alt="Revers of the images" />
            </div>
            <div className="card__image card__image-avers">
                <img src={card.src} alt="One of the animal" />
            </div>
        </div>
    );
}