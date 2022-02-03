import React,{useRef,useReducer} from 'react';

 const ShoppingList=(props)=> {
     const inputref=useRef();
     /*const [items,setitems]=usestate([])

     {
         newarr
         setitems(newarr);
     }*/
     /// if you want to design logic for how to change the state
     // and its complex logic then use useReducer instaed of usestate
     const [items,dispatch] = useReducer((state,action)=>{
         switch(action.type){
             case 'add':
                 return [...state,{id:state.length,name:action.name}]
                 break;
             case 'delete':
                  return state.filter((item,index)=>{
                      return index!=action.index;
                  })
                 break; 
             default:
                 return state;
         }
     },[]);
     const addData=(event)=>{
         event.preventDefault();
         dispatch({type:'add',name:inputref.current.value});
         inputref.current.value="";

     }
  return (<div>
      <form onSubmit={addData}>
          <input ref={inputref} type="text"></input>
      </form>
      <ul>
          {items.map((item,index)=>(
              <li key={item.id}>{item.name}
              <button onClick={()=>{dispatch({type:'delete',index})}}>delete</button>              </li>
          )

          )}
      </ul>
  </div>);
}
export default ShoppingList;