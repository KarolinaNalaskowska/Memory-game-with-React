import React from "react";
import "./_card.scss";

export default function Card ({ onClick, card, index, isInactive, flipped, clickable}) {

    const handleClick = () => {
        clickable && onClick(index);
        console.log(index);
    }

    return (
        <div className="card" onClick={handleClick} >
            <div className="card-image card-image-revers">
                <img src="images/cover.png" alt="Revers of the images" />
            </div>
            <div className="card-image card-image-avers">
                <img src={card.src} alt="One of the animal" />
            </div>
        </div>
    );
}