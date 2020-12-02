import React from "react";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props) => {


    return(

        <MyPosts posts={props.state.posts} addPost={props.addPost} />
    )



};


export default Profile;