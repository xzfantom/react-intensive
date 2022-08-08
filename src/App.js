import React from "react";
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import {Routes, Route, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const App = () => {
    const isLogin = useSelector( state => state.isLogin );
    return(
        <div className = { styles.container }>
            <div className = { styles.appWrapper }>
                <Header />
                <Routes>
                    <Route path = "/" element = {< Login />}/>
                    <Route path = "/todos" element = { !isLogin ? <Navigate to="/" replace /> : < Todo />}/>
                </Routes>
            </div>
        </div>
  )
}

export default App;