import React from 'react';
import Header from './components/Header/Header'
import HeroForm from './components/HeroForm/Hero__form'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";



import './App.css';
import {BrowserRouter, Route} from "react-router-dom";




function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <main className="container">
                    <Navbar/>
                    <div className="hero">
                        <HeroForm/>
                        <div className="hero__content">


                            <Route path ='/profile' render = { () => <Profile state={props.state.profilePage} addPost ={props.addPost}/>}/>
                            <Route path ='/dialogs' render = { () => <Dialogs state={props.state.dialogsPage} state={props.state.dialogsPage} />}/>


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