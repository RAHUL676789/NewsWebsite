import { useState } from "react"

import "./search.css"
export default function Search({data,inputChange}){
    console.log(data);
    let [inp,setInp] = useState("");

    let handleInputChange = (event)=>{
        let inputVal = event.target.value;
        console.log(inputVal);
        setInp(inputVal);
        inputChange(inputVal)
        
       
    }



    return (
        <>
        <form>
            <div>
                <input 
                type="text" 
                placeholder="SEARCH HERE" 
                value={inp}
                onChange={handleInputChange}
                className="inp"/>
            </div>
        </form>
        </>
    )
}