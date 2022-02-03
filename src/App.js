import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeList from "./components/EmployeeList";
import clock from "./clock.jpg"
import ShoppingList from './components/ShoppingList';
function App() {
  /*let emparr=[
    {empid:10,ename:"Kishori",mobile:4444},
    {empid:20,ename:"Ashwini",mobile:1111},
    {empid:30,ename:"Deepali",mobile:2222},
    {empid:40,ename:"Sangeeta",mobile:3333}
  ]*/
  const LOCAL_STORAGE_EMPARR="emparr";
  const [emparr,setArr]=useState([
    {empid:10,ename:"Kishori",mobile:4444},
    {empid:20,ename:"Ashwini",mobile:1111},
    {empid:30,ename:"Deepali",mobile:2222},
    {empid:40,ename:"Sangeeta",mobile:3333}
  ])
  let [count,setCount]=useState(0);

  /*let [cnt,funct1,funct2] = myfunction(0)
  export function myfunction(num){
    let a=num;
    const f1=function(n){
      if (a>10)
        a=n
       
    }
    const f2=function(n){
      a=n
       
    }
    return [a,f1,f2]
  }*/

  /////execute first time when function called
  useEffect(()=>{

    const arr=JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPARR));
    if(arr)
       setArr(arr);
    else{
       console.log("arr not found")
    }
  },[])        //componetDidMount

  ///execute first time when function called
  //every time when emparr changes
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_EMPARR,JSON.stringify(emparr))
  },[emparr,count]) //componentDidUpdate
  //const [count,setCount]=useState(0);
  

  const addEmployeeHandler=(emp)=>{
    console.log("in employee add handler in App.js")
    console.log(emp);
    //emparr.push(emp);
    let newArr=[...emparr,{...emp}]
    setArr(newArr);
    setCount(count+1)
    console.log(emparr)

  }
  const removeEmployeeHandler=(id)=>{
    let newarr=emparr.filter((emp)=>emp.empid!=id);
    setArr(newarr);
  }
  return (
    <div className="App">
       <ShoppingList></ShoppingList>   
      <Header></Header>
       <div className="row">
         <div className="col-sm-12 col-md-3" >
           <img src={clock} height="100px" width="100px"></img>
         </div>
         <div className="col-sm-12 col-md-4">
            <EmployeeAdd addemployee={addEmployeeHandler}></EmployeeAdd>
         </div>
         <div className="col-sm-12 col-md-5">
            <EmployeeList employees={emparr} deleteEmpDetails={removeEmployeeHandler} ></EmployeeList>
         </div>
       </div>
      
       
    </div>
  );
}

export default App;
