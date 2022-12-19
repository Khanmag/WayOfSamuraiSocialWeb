import Header from "./conponents/Header/Header";
import st from './App.module.css'
import Navbar from "./conponents/Navbar/Navbar";
import Profile from "./conponents/Profile/Profile";
import Dialogs from "./conponents/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import News from "./conponents/News/News";
import Settings from "./conponents/Settings/Settings";
import Music from "./conponents/Music/Music";

const App = () => {
    return (
        <div className={st.wrapper}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                {/*<Route path={'*'} element={<News/>}/>*/}
            </Routes>
            {/*<div className={st.content}>*/}
            {/*        <Route path="/profile" render={() => <Profile/>}/>*/}
            {/*        <Route path="/" render={() => <Dialogs/>}/>*/}
            {/*</div>*/}
        </div>
    );
}


export default App;