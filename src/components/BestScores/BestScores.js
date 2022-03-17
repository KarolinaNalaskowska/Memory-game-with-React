import React from 'react';
import "./_bestscores.scss";

export default function BestScores() {
    return (
        <div className="table__background">
            <div className="container table__container">
            <div className="table__buttons">
                <a href="/" className="btn btn__table">Main Page</a>
                <a href="/memoapp" className="btn btn__table">Game</a>
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