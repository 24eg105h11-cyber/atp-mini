import {create} from "zustand"


export const useCounterStore=create((set)=>({
    //state
    newCounter:500,
    newCounter1:200,
    newCounter2:500,
    user:{name:"ravi",email:"revanth@gmail.com"},
    //function to change email
    changeEmail:()=>set({...user,email:"test@gmail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"revanth",age:19}),
    //function to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
     incrementCounter1:()=>set(state=>({newCounter:state.newCounter+1})),
     incrementCounter2:()=>set(state=>({newCounter2:state.newCounter2-20})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0})
}))