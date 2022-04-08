import { useState } from "react"

export default function Joke({j}){

    const [spoiler, setSpoler] = useState(0)

    const removeSpoiler = ()=>{
        setSpoler(1)
    }

    if (j.type === "twopart"){
        return(
            <div className="joke">
                <p>{j.setup}</p>
                <p onClick={removeSpoiler} className={spoiler===0?"spoiler":"nospoiler"}>{j.delivery}</p>
            </div>
        )
    } else{
        return (
            <div className="joke">
                <p>{j.joke}</p>
            </div>
        )
    }

}



   