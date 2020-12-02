import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";




function Navbar() {
    return (
        <div className={classes.nav}>
            <div className={classes.nav__list}>
                <ul>
                    <div className={classes.item}>
                        <li><NavLink  to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
                    </div>
                    <div className={classes.item}>
                        <li><NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink></li>
                    </div>
                    <div className={classes.item}>
                        <li><NavLink to="/emty" activeClassName={classes.activeLink}>Emty</NavLink></li>
                    </div>
                    <div className={classes.item}>
                        <li><NavLink to="/emty" activeClassName={classes.activeLink}>Emty</NavLink></li>
                    </div>

                </ul>
            </div>


        </div>
    )

}

export default Navbar;