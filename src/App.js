import "./main.scss";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainView from "./components/Main_View/MainView";
import MainContent from "./components/Main_Content/MainContent";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/memoapp" element={<MainContent />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;