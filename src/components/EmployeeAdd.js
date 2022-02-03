import React,{Component, Fragment} from 'react';
import { Form,Button} from 'react-bootstrap';

class EmployeeAdd extends React.Component{
    constructor(props){
        super(props);
        console.log("in EmployeeAdd constructor")
        console.log(this.props)
        this.state={empid:"",ename:"",mobile:"",isValid:true}
    }

    f=(a,b)=>{


    }
    add=(event)=>{
        event.preventDefault();  //stops the default action of submit event i.e stops refresh the page
        console.log("In employee add")
        //to validate form fields
        if(this.state.empid==="" || this.state.ename==="" || this.state.mobile===""){
            this.setState({isValid:false});
            return;
        }
        this.setState({isValid:true});
        this.props.addemployee(this.state);
        this.setState({empid:"",ename:"",mobile:"",isValid:true});
    }
    render(){
       return (<div>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee id</Form.Label>
            <Form.Control type="text" placeholder="enter empid"
            value={this.state.empid}
            onChange={(event)=>{this.setState({empid:event.target.value})}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" placeholder="enter name" 
            value={this.state.ename}
            onChange={(event)=>{this.setState({ename:event.target.value})}} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee Mobile</Form.Label>
            <Form.Control type="text" placeholder="enter mobile" 
             value={this.state.mobile}
            onChange={(event)=>{this.setState({mobile:event.target.value})}} 
            />
        </Form.Group>
        <Button type="submit" variant="success" onClick={this.add}>Success</Button>

    </Form>
       </div>)
    }
}

export default EmployeeAdd;