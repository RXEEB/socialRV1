import React from "react";
import './Preloader.css'


let Preloader = () => {
    return (
        <section>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}


export default Preloader;