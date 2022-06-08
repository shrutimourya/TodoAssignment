import React,{useState,useEffect} from "react";
import './todostyle.css';
  function Createtodo(){

    const [inputData,setInputData]=useState('');
    const[items,setItems]=useState([]);
    

     const addItem=()=>{

        if(!inputData){
        }else{

         setItems([...items,inputData])
         setInputData("")
        }
     }

     const deleteItem=(id)=>{
       const updatedItems = items.filter((elem,ind)=>{
           return ind !== id;
       })
       setItems(updatedItems);
     }

    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(items))
    },[items]);

     const getLocalItems=()=>{
         let list=localStorage.getItem('lists');
         if(list){
             return JSON.parse(localStorage.getItem('lists'));
         }else{
             return [];
         }
     }

     function done(){
         alert('this task is done');
     }
     return(
         <>
         <div className="box">
             <div className="text-end">
                 <h4>ToDo App</h4>
                 <p>Add a new task to do</p>

             </div>
             <div className="text-addTodo">
                 <input type="text" name="todo" placeholder="write here..." value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                 <button className="btn-addTodo" type="button" name="addTodo" onClick={addItem}>Add ToDo</button>
             </div>

         </div>
         <div className='todo-list'>
            <ul>
                {
                    items.map((elem,ind)=>{
                        return(

                            <li>
                            <div className="todoText">{elem}</div>
                            <div>
                                <button className='todobutton-1' onClick={done}>complete</button>
                                <button className='todobutton-2'onClick={()=>deleteItem(ind)}>delete</button>
                            </div>
                        </li>

                        )

                    })

            
                   
               
                }
            </ul>
        </div>
         </>

     );

     }
 export default Createtodo;