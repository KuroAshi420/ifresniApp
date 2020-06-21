import React from 'react';
import { BrowserRouter} from "react-router-dom";
import './App.css';
import MainPage from './Components/mainpage/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <MainPage/>
        </BrowserRouter>
    </div>
  );
}

export default App;
