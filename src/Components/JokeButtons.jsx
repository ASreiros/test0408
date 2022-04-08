export default function JokeButtons({list, random}){


    return(
       <div className="btn-holder">
           <button onClick={list}>List of jokes</button>
           <button onClick={random}>Random joke</button>
       </div>
    )
}