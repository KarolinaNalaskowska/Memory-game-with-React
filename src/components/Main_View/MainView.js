import "./_mainview.scss";
import "../../components/general/_general.scss";

export default function MainView() {
    return (
        <div className="background">
            <div className="mainview mainview__container container">
                <div className="mainview__content">
                    <h1 className="title">Welcome to my memory card game!</h1>
                    <div className="mainview__button">
                        <a href="/memoapp" className="btn btn__first">Start Game</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
