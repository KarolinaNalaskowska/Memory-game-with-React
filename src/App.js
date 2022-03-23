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
    const ordersCollection = collection(db, 'users');
    useEffect(() => {
        async function getUsers(db) {
            const usersCol = collection(db, "users");
            const userSnapshot = await getDocs(usersCol);
            const userList = userSnapshot.docs.map((doc) => doc.data());
            const users = userList.map((el) => el.nickname);
            setUsersTab(users)
        }
        getUsers(db)
    }, []);
    function addNewUser() {
        if (usersTab.includes(inputValue)) {
            alert("Nick is taken");
        } else {
            addDoc(ordersCollection, {
                nickname: inputValue
            });
        }
    }
    const setNick = (e) => setInputValue(e.target.value);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <MainView nick={inputValue} setNick={setNick} addNewUser={addNewUser} />
                    } />
                    <Route path="/memogame" element={<MainContent />} />
                    <Route path="/players"  element={<BestScores users={usersTab} />} />
                    <Route path="/rules" element={<Rules />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}