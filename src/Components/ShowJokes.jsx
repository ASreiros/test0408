import Joke from "./Joke";


export default function ShowJokes({jokes, form}){

    if(form===-2){
        return <p>Press the button to read a joke</p>
    } else{
        if(form===-1){
            return(
                jokes.map(j=>
                    <Joke j={j}></Joke>
                )
            )
        } else{
            console.log(form);
            return(
                <Joke j={jokes[form]}></Joke> 
            )
        }
    }


}