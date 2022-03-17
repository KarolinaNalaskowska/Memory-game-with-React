import "./main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import db from "./firebase";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import MainView from "./components/Main_View/MainView";
import MainContent from "./components/Main_Content/MainContent";
import BestScores from "./components/BestScores/BestScores";
import Rules from "./components/Rules/Rules";



export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [usersTab, setUsersTab] = useState([]);
    const [bestScore, setBestScore] = useState();
    const ordersCollection = collection(db, 'users');
    useEffect(() => {
        async function getUsers(db) {
            const usersCol = collection(db, "users");
            const userSnapshot = await getDocs(usersCol);
            const userList = userSnapshot.docs.map((doc) => doc.data());
            const users = userList.map((el) => el.nickname);
            console.log(userList);
            console.log(users);
            setUsersTab(users)
        }
        getUsers(db)
    }, []);
    function addNewUser() {
        const newDoc = addDoc(ordersCollection, {
            nickname: inputValue
        });
        console.log(newDoc);
    }
    const setNick = (e) => setInputValue(e.target.value);
    const pull_data = (data) => {
        console.log(data);
        setBestScore(data);
        return data;
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <MainView nick={inputValue} setNick={setNick} addNewUser={addNewUser} />
                    } />
                    <Route path="/memoapp" element={<MainContent func={pull_data} />} />
                    <Route path="/bestscores"  element={<BestScores users={usersTab} recordScore={bestScore} />} />
                    <Route path="/rules" element={<Rules />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}