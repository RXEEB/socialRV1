import React,{useState} from "react";


const timeApp = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);

    }
    setInterval(UpdateTime, 1000)
    return(

        <div>
            {ctime}
        </div>
    )
}


export  default timeApp;