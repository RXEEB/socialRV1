import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import HeroForm from "../HeroForm/Hero__form";




const Profile = (props) => {



    return(
        <div>
            <HeroForm profile = {props.profile} />
            <MyPostsContainer  />

        </div>
    )



};


export default Profile;