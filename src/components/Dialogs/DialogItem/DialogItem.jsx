import React from "react";
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Avatar from '../../../assets/img/avatar_5.svg'


const DialogItem = (props) => {
    return (

        <div className={classes.dialog }>
            <img width="40" src={Avatar} alt=""/>
            <NavLink  to={"/dialogs/" + props.id} activeClassName={classes.activeLink}>{props.name} {props.id}</NavLink>

        </div>

    )
}





export default DialogItem;
