import React from 'react';
import "./_bestscores.scss";
import { Link } from "react-router-dom";

export default function BestScores({ users }) {
    console.log(users)
    return (
        <div className="table__background">
            <div className="container table__container">
            <div className="table__buttons">
                <Link to="/" className="btn btn__table">Main Page</Link>
                <Link to="/memoapp" className="btn btn__table">Game</Link>
            </div>
            <div className="tableCover">
                <div>
                <table className="table">
                    <thead>
                    <tr className="table__head">
                        <th className="table__th">Names</th>
                        <th className="table__th">Scores</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="table__body">
                        <td className="table__td">Bob</td>
                        <td className="table__td">10</td>
                    </tr>
                    <tr className="table__body">
                        <td className="table__td">Julia</td>
                        <td className="table__td">14</td>
                    </tr>
                    <tr className="table__body">
                        <td className="table__td">Adam</td>
                        <td className="table__td">17</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}