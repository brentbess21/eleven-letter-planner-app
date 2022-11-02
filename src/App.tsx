import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ErrorPage from "./pages/errorPage/ErrorPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/signupPage/SignupPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />}/>
            <Route path={'/'} element={<HomePage />}/>
            <Route path={'*'} element={<ErrorPage />}/>
        </Routes>
    </div>
  );
}

export default App;
