import "./_bestscores.scss";
import { Link } from "react-router-dom";

export default function BestScores({ users }) {
    const nonDuplicateUsers = users.reduce(function (a, b) {
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    }, []);

    return (
        <div className="table__background">
            <div className="container table__container">
            <div className="table__buttons">
                <Link to="/" className="btn btn__table">Main Page</Link>
                <Link to="/memogame" className="btn btn__table">Game</Link>
            </div>
            <div className="tableCover">
                <table className="table">
                    <thead>
                    <tr className="table__head">
                        <th className="table__th">Already played:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {nonDuplicateUsers.map((el, i) => {
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
    )
}