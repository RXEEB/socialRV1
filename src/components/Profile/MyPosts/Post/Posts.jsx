import React from "react";
import classes from './Posts.module.css';
import Avatar from '../../../../assets/img/avatar_1.svg'

export default function Posts(props) {
    return (
        <div className={classes.posts_wrapper}>
            <div className={classes.post_item}>
                <img width="50" src={Avatar} alt=""/>
                {props.messages}
                <p>{props.linkCount}</p>
                <p>{props.id}</p>


            </div>
        </div>


    )

}