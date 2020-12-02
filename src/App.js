import React from 'react';

import HeroForm from './components/HeroForm/Hero__form'
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <main className="container">
                    <Navbar/>
                    <div className="hero">
                        <HeroForm/>
                        <div className="hero__content">


                            <Route path ='/profile/:userId?' render = { () => <ProfileContainer  />} />


                            <Route path ='/dialogs' render = { () => <DialogsContainer/>}/>

                            <Route path ='/users' render = { () => <UsersContainer />} />


                        </div>

                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;