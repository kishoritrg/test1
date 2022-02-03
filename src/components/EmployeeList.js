import React from 'react'
import EmployeeCard from "./EmployeeCard";

const EmployeeList=(props)=>{
    console.log(props);
    const removeEmp=(id)=>{
       props.deleteEmpDetails(id);
    }
    const renderEmployee=props.employees.map((emp)=>{
        return (
            <EmployeeCard key={emp.empid} employee={emp} deleteEmpData={removeEmp}></EmployeeCard>
        )
    })
return (
   <div>
       <h1>Employee List</h1>
       {
           renderEmployee
       }
   </div>
)

}

export default EmployeeList;