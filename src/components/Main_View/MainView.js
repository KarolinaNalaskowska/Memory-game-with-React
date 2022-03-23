import React from 'react';
import "./_mainview.scss";
import "../../components/general/_general.scss";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
export default function MainView({ nick, setNick, addNewUser }) {
    return (
        <div className="background">
            <div className="mainview mainview__container container">
                <div className="mainview__content">
                    <h1 className="mainview__title">Welcome to the memory game!</h1>
                    <Link to="/rules" className="question">Do you know the rules?</Link>
                    <Form nick={nick} setNick={setNick} addNewUser={addNewUser} />
                    <div className="mainview__button">
                        <Link to="/memogame" className="btn btn__first">Start Game</Link>
                        <Link to="/players" className="btn">Players</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}