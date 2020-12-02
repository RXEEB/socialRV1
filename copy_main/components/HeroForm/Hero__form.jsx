import React from "react";
import './Hero__form.css'

export default function HeroForm () {
    return(
        <div className="hero__form">
            <form>
                <label>

                    <input  type="text" name="name" />
                </label>
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}