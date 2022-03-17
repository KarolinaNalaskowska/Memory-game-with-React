import React from "react";
import classnames from "classnames";
import "./_card.scss";

export default function Card ({ onClick, card, index, inactive, flipped, clickable }) {
    const handleClick = () => {
        !flipped && !clickable && onClick(index);
    }
    const classes = classnames(
        "card", {
        "flipped": flipped,
        "inactive": inactive
    });

    return (
        <div className={classes} onClick={handleClick} >
            <div className="card-image card-image__revers">
                <img src="images/cover.png" alt="Revers of the images" />
            </div>
            <div className="card-image card-image__avers">
                <img src={card.src} alt="One of the animal" />
            </div>
        </div>
    );
}