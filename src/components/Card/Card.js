import React from "react";
import "./_card.scss";

export default function Card ({ onClick, card, index, isInactive, isFlipped, isDisabled }) {

    const handleClick = () => {
        onClick(index);
    }

    return (
        <div onClick={handleClick} >
            <div className="card-image card-image__revers">
                <img src="images/cover.png" alt="Revers of the images" />
            </div>
            <div className="card-image card-image__avers">
                <img src={card.src} alt="One of the animal" />
            </div>
        </div>
    );
}