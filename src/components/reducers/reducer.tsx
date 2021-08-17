import React, { useReducer } from "react";
import { number } from "yargs";

type Actions =
  | { type: "add"; text: string }
  | {
      type: "remove";
      idx: number;
    };

interface Todo {
    text : string, 
    complete : boolean
}


type State = Todo[]



export const TodoReducer = (state : State, action : Actions) =>{
    switch(action.type){
        case "add" : 
            return [...state, {
                text : action.text,
                complete : false
            }]

        case "remove": 
            return state.filter((_, i)=> action.idx !== i)
        default : 
        return state
    }


}

