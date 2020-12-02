import React from "react";
import './Hero__form.css'
import Preloader from "../Common/Preloader/Preloader";



const HeroForm = (props) => {

    if  (!props.profile){
        return ''

    }



        return(
    <div className="hero__form">
        <img src={props.profile.photos.large} alt="dgsdf"/>
        <form>
            <label>

                <input type="text" name="name"/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    </div>


)
}


export default HeroForm