import React from 'react';
import {PersonCircle,Trash,PenFill} from "react-bootstrap-icons";
 const EmployeeCard=(props)=> {
  const deleteEmp=(id)=>{
     props.deleteEmpData(id);
  }
  return (
  <div className="container border-bottom">
    <div className="row">
      <div className="col-md-1">
         <PersonCircle/>
      </div>
      <div className="col-md-7 text-left">
        <span>{props.employee.empid}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{props.employee.ename}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{props.employee.mobile}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="col-md-2">
         <PenFill/>
      </div>
      <div className="col-md-2" onClick={()=>deleteEmp(props.employee.empid)}>
         <Trash/>
      </div>

    </div>
</div>);
}

export default EmployeeCard;
