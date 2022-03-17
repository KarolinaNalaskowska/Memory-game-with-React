import React from 'react';
import "./_form.scss";

export default function Form ({ nick, setNick, addNewUser }) {
    return (
        <div className="form__container">
            <p className="form-text">Leave your nickname here:</p>
            <form className="form">
                <input
                    className="form__input"
                    maxLength="20"
                    value={nick}
                    type="text"
                    placeholder="Your nickname"
                    onChange={setNick}
                />
                <div className="form__button" onClick={addNewUser}>Send</div>
            </form>
        </div>
    )
}