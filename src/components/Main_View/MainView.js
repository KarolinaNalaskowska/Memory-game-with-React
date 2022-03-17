import React from 'react';
import "./_mainview.scss";
import "../../components/general/_general.scss";
import Form from "../Form/Form";

export default function MainView({ nick, setNick, addNewUser }) {
    return (
        <div className="background">
            <div className="mainview mainview__container container">
                <div className="mainview__content">
                    <h1 className="mainview__title">Welcome to the memory game!</h1>
                    <a href="/rules" className="question">Do you know the rules?</a>
                    <Form nick={nick} setNick={setNick} addNewUser={addNewUser} />
                    <div className="mainview__button">
                        <a href="/memoapp" className="btn btn__first">Start Game</a>
                        <a href="/bestscores" className="btn">Best Scores</a>
                    </div>
                </div   
            </div>
        </div>
    )
}
