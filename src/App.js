import "./main.scss";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import db from "./firebase";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

import MainView from "./components/Main_View/MainView";
import MainContent from "./components/Main_Content/MainContent";
import BestScores from "./components/BestScores/BestScores";
import Rules from "./components/Rules/Rules";

async function getUsers(db) {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    console.log(userList);
}

function App() {
    useEffect(() => {
        console.log(db);
        getUsers(db);
    });

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainView nickname={db}/>} />
                  <Route path="/memoapp" element={<MainContent />} />
                  <Route path="/bestscores" element={<BestScores />} />
                  <Route path="/rules" element={<Rules />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;