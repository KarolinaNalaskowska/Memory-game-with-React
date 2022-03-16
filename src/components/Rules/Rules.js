import "./_rules.scss";
import React from "react";

export default function Rules () {
    return (
        <div className="background">
            <ul>
                <li className="li">The key to winning is finding all the pairs.</li>
                <li className="li">There are 16 pairs to be found.</li>
                <li className="li">When you click on a card, it will rotate.
                    Try to remember what animal appears on this card!</li>
                <li className="li">Then click on the second card to turn it over.
                    If the animals on both cards are the same - great!
                    You just found a pair! </li>
                <li className="li">To be the best and be on the leaderboard,
                    you need to find all the pairs using as few moves as possible!</li>
            </ul>
            <h2 className="rules__title">Good luck!</h2>
            <div className="rules__button">
                <a href="/" className="btn btn__first">Back to home</a>
                <a href="/memoapp" className="btn btn__second">Wanna play?</a>
            </div>
        </div>
        )
};