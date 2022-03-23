import React from "react";
import "./_rules.scss";
import "../../components/general/_general.scss";
import { Link } from "react-router-dom";

export default function Rules () {
    return (
        <div className="background">
            <div className="rules__cover">
                <ul className="list">
                    <li className="list__element">The key to winning is finding all the pairs.</li>
                    <li className="list__element">There are 16 pairs to be found.</li>
                    <li className="list__element">When you click on a card, it will rotate.</li>
                    <li className="list__element">Try to remember what animal appears on this card!</li>
                    <li className="list__element">Then click on the second card to turn it over.</li>
                    <li className="list__element">If the animals on both cards are the same - great!
                        You just found a pair! </li>
                    <li className="list__element">To be the best you need to find all the pairs
                        using as few moves as possible! </li>
                </ul>
            </div>
            <h2 className="rules__title">Good luck!</h2>
            <div className="rules__button">
                <Link to="/" className="btn btn__first btn__media">Back to home</Link>
                <Link to="/memogame" className="btn btn__media">Wanna play?</Link>
            </div>
        </div>
    )
};