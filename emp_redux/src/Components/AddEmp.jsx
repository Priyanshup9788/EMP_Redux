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
    const [department, setDepartment] = useState(["IT", "Account", "Sales", "Purchase"])
    const [hobby, setHobby] = useState([]);

    const onFormChange = (e) => {
        if (e.target.name == "hoby") {
            let hoby = [...hobby];
            if (e.target.checked) {
                hoby.push(e.target.value);
                setHobby(hoby)
            }
            else if (!e.target.checked) {
                hoby = hoby.filter((h) => h != e.target.value);
                setHobby(hoby);
            }
            setNewEmp({ ...newEmp, [e.target.name]: [...hoby] });
            return
        }
        setNewEmp({ ...newEmp, [e.target.name]: e.target.value })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let newId = allEmp.length > 0 ? Math.max(...allEmp.map((emp) => emp.empid)) + 1 : 1;
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
                        {department.map((dept) => (
                            <option selected={newEmp.department ? newEmp.department : ""} value={dept}>{dept}</option>
                        ))}

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Hobby</Form.Label>
                    <Form.Check
                        onChange={(e) => onFormChange(e)} 
                        type='checkbox'
                        label='Coding'
                        value='Coding'
                        name='hoby'
                        checked={hobby.includes("Coding") ? "checked" : ""}
                    />
                    <Form.Check
                        onChange={(e) => onFormChange(e)} 
                        type='checkbox'
                        label='Swiming'
                        value='Swiming'
                        name='hoby'
                        checked={hobby.includes("Swiming") ? "checked" : ""}
                    />
                    <Form.Check
                        onChange={(e) => onFormChange(e)} 
                        type='checkbox'
                        label='Reading'
                        value='Reading'
                        name='hoby'
                        checked={hobby.includes("Reading") ? "checked" : ""}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        onChange={(e) => onFormChange(e)} 
                        type='radio'
                        label='Male'
                        value='Male'
                        name='gender'
                        checked={newEmp.gender=="Male"?"checked":""}
                    />
                    <Form.Check
                        onChange={(e) => onFormChange(e)} 
                        type='radio'
                        label='Female'
                        value='Female'
                        name='gender'
                        checked={newEmp.gender=="Female"?"checked":""}
                    />
                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default AddEmp