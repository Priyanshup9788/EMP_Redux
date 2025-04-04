import Table from 'react-bootstrap/Table';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { deleteEmp } from '../Redux/action';
import { Link } from 'react-router-dom';

const ViewEmp = () => {
    let empData = useSelector((store)=>store.employee.employee);
    let dispatch = useDispatch()
    console.log(empData)
    const [allEmp,setAllEmp] = useState(empData);

    const onDelete=(e,id)=>{
        e.preventDefault();
        setAllEmp(allEmp.filter((emp)=>emp.empid!=id));
        dispatch(deleteEmp(id))
    }
  return (
    <Table className='w-75 mx-auto' striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Hobby</th>
        <th>Department</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {allEmp.map((emp)=>(
            <tr>
            <td>{emp.empid}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.gender}</td>
            <td>{emp.hoby.toString()}</td>
            <td>{emp.department}</td>
            <td><Link to={'/update/'+emp.empid}><Button variant="primary" className='me-2'>Edit</Button></Link>
            <Button variant="danger" onClick={(e)=>{onDelete(e,emp.empid)}}>Delete</Button></td>
          </tr>
        ))}
      
      
    </tbody>
  </Table>
  )
}

export default ViewEmp