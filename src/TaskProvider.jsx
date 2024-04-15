import { createContext, useEffect, useState } from "react";

export const TaskContextApi = createContext()

   // To get the data from localStorage
   let getLocalItems = ()=>{
    let lists = localStorage.getItem("lists")
    if(lists){
        return JSON.parse(lists)
    } else {
        return [];
    }
   }

      
const TaskProvider = ({children})=>{

    let [task, setTask] = useState(getLocalItems()) 

    const addTask = (title, description,category) =>{
        setTask([...task, {title, description, category}])
    } 
      
    let [state, setState] = useState({
        title:"",
        description : "",
        category : ""
      })

      // To add task into localStorage
      useEffect(()=>{
          localStorage.setItem("lists", JSON.stringify(task) )
      },[task])

      let [selective , setSelective] = useState({
          selectedCategory: "all"
      })

      let handleCategory = (e)=>{
         let {name, value} = e.target;
         setSelective({[name]:value})
         setTask(task)
      }

    return(
        <TaskContextApi.Provider value={{state, setState,addTask, task, selective, handleCategory}}>
           {children} 
        </TaskContextApi.Provider>
    )
}
export default TaskProvider;

