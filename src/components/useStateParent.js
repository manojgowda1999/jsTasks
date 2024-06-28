import React from "react";
import { useState } from "react";
import useStateChild from "./useStateChild";
function useStateParent(){

    const [message,setMessage] = useState('');
    
    const handleMessage =(msg) => {
setMessage(msg)
    }

    return(

        <div>
           <useStateChild onMessage={handleMessage}></useStateChild>
           <h3>MEssage from the child.... {message}</h3>
        </div>
    )
}


export default useStateParent;