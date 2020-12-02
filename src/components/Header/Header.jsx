import React from "react";
import Logo from "../../assets/img/henco.svg";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header (props) {

    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <img width="120px" src={Logo} alt=""/>
            </div>
            <div className={classes.login}>
                {props.isAuth ? props.login : <NavLink to ={'/login'}>login</NavLink>  }

            </div>
        </header>
    )


}
export default Header;