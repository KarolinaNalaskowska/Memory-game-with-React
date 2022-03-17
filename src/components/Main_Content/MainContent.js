import "./_mainApp.scss";
import Cards from "../Cards/Cards";

export default function MainContent({ func }) {
    return (
        <div className="memoapp">
            <Cards func={func} />
        </div>
    )
}