import React from "react";
import Logo from "../../assets/img/henco.svg";
import classes from './Header.module.css'

function Header () {

    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                <img width="120px" src={Logo} alt=""/>
            </div>
        </header>
    )


}
export default Header;