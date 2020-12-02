import React from "react";
import classes from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";






const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let massagesElement = props.state.massages.map(m => <Massage massage={m.massage}/>);

    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={classes.massage__items}>
                {massagesElement}

            </div>
        </div>

    )

}

export default Dialogs;
