import React from 'react';
import "./_bestscores.scss";
import { Link } from "react-router-dom";

export default function BestScores({ users, recordScore }) {
    return (
        <div className="table__background">
            <div className="container table__container">
            <div className="table__buttons">
                <Link to="/" className="btn btn__table">Main Page</Link>
                <Link to="/memoapp" className="btn btn__table">Game</Link>
            </div>
            <div className="tableCover">
                <div className="tables">
                    <table className="table table__first">
                        <thead>
                        <tr className="table__head">
                            <th className="table__th">Highest score ever!</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="table__body">
                            <td className="table__td">{recordScore}</td>
                        </tr>
                        </tbody>
                    </table>
                <table className="table">
                    <thead>
                    <tr className="table__head">
                        <th className="table__th">Best Gamers</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((el, i) => {
                        return (
                            <tr key={i} className="table__body">
                                <td className="table__td">{el}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}