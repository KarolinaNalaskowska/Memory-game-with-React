import React from 'react';
import "./_form.scss";

export default function Form ({ nickname, userAge }) {

    return (
        <div className="form">
            <p className="form__text">Leave you nickname</p>
            <form>
                <input type="text" placeholder="Your nickname" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}