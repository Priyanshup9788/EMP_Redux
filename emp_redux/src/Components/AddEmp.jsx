import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addEmp } from '../Redux/action';

const AddEmp = () => {
    let dispatch = useDispatch()
    let empData = useSelector((store) => store.employee.employee);
    console.log(empData)
    const [allEmp, setAllEmp] = useState(empData);
    const [newEmp, setNewEmp] = useState({})
    const[department,setDepartment]=useState(["IT","Account","Sales","Purchase"])

    const onFormChange = (e) => {
        setNewEmp({ ...newEmp, [e.target.name]: e.target.value })
        console.log(e.target.name + " : " + e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let newId = allEmp.length > 0 ? Math.max(...allEmp.map((emp) => emp.empid)) + 1 : 1;
        console.log(newId);
        if (!newEmp.name || !newEmp.email) {
            alert("fill all field");
            return;
        }
        let emp = { ...newEmp, empid: newId }
        dispatch(addEmp(emp));
        setAllEmp([...allEmp, newEmp])
        setNewEmp({})
    }
    return (
        <Container>
            <h1 className='text-center'>Add Product</h1>
            <Form className='w-50 mx-auto mt-3' onSubmit={(e) => onFormSubmit(e)}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name='name' onChange={(e) => onFormChange(e)} placeholder="Enter Name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" onChange={(e) => onFormChange(e)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Department</Form.Label>
                    <Form.Select aria-label="Default select example" name="department" onChange={(e) => onFormChange(e)} >
                        <option>--- Select Department --- </option>
                        {department.map((dept)=>(
                            <option selected={newEmp.department?newEmp.department:""} value={dept}>{dept}</option>
                        ))}
                        
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddEmp