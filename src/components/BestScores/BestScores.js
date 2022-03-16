import React from 'react';

export default function BestScores() {
    return (
        <div>
            <div>
                <a href="/">Main Page</a>
                <a href="/memoapp">Game</a>
            </div>
        <table>
            <thead>
            <tr>
                <th>Names</th>
                <th>Scores</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Bob</td>
                <td>10</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}