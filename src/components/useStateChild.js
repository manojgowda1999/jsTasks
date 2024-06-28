import React from "react";
 function useStateChild({sendMessage}){

    const passMessage = ()=> {
        sendMessage = ('getting the data from the child');
    }
    return (

        <div>
        <button onClick={passMessage}>Click here </button>
        </div>
    )
   
 }

 export default useStateChild;