import JokeButtons from "./JokeButtons";
import { useState, useEffect} from "react";
import axios from "axios";
import ShowJokes from "./ShowJokes";
import rand from "../Common/rand"

export default function JokeForm(){
    const [jokes, setJokes] = useState([])
    const [jokeform, setJokeForm] = useState(-2)

    useEffect(()=>{

        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
        .then(res=>{
            setJokes(res.data.jokes)
           
        })

    }, [])

    const List = ()=>{
        setJokeForm(-1)
    }

    const Random = ()=>{
        setJokeForm(rand(0, jokes.length-1))
    }

    

    return(
        <>
            <JokeButtons list={List} random={Random}></JokeButtons>
            <ShowJokes form={jokeform} jokes={jokes}></ShowJokes>
        </>
    )

}