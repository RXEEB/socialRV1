import React from "react";
import classes from "./Users.module.css";
import Avatar from "../../assets/img/a1.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 100);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={classes.wrapper}>
        <div className={classes.pagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : classes.pagination_item}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }} key={p}>{p}</span>

            })}


        </div>

        <div className={classes.all_users}>


            {

                props.users.map(u => <div className={classes.usersBox} key={u.id}>

                    <div className={classes.usersBox_left}>
                        <div className={classes.avatar}>
                            <NavLink to={'/profile/' + u.id}> <img
                                src={u.photos.small != null ? u.photos.small : Avatar}
                                className={classes.usersPhoto}
                                alt={''}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btn} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '608fe950-d301-450d-a3b0-3fdbd05de1d8'
                                            }
                                        })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unfollow(u.id)}
                                            props.toggleFollowingProgress(false, u.id);

                                        });

                                }}>UnFollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btn} onClick={() => {
                                    props.toggleFollowingProgress(true , u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY' : '608fe950-d301-450d-a3b0-3fdbd05de1d8'
                                            }
                                        })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.follow(u.id)}
                                            props.toggleFollowingProgress(false, u.id);

                                        });


                                }}>Follow</button>}

                        </div>
                    </div>


                    <div className={classes.users_info}>
                        <div>
                            <h2>{u.name}</h2>
                        </div>
                        <div>
                            <div>{u.status}</div>


                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                            <div>user ID: {u.id}</div>
                        </div>
                    </div>


                </div>)


            }
        </div>
    </div>

}

export default Users

