import React, { Component, useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {Container} from 'reactstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Register = () => {

    const[register, setRegister] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        userGroupId: 1
    })

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let updated = {
            ...register,
            [name]: value
        };
        setRegister(updated);
        // console.log(register);
    }

    const handleOnChangeStatus = (e) => {
        let flag = e.target.checked;
        let statusId = flag ? 2 : 1;
        let updated = {
            ...register,
            userGroupId: statusId
        }
    
        setRegister(updated);
    }

    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(register);
        axios.post("http://localhost:8080/register", register)
        .then(response => {
            console.log(response);
            alert(response.data.message);
            if (response.data.userId !== -1) {
                console.log(response.data.user);
                history.push('/login');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Container style={{backgroundColor: "white"}}>
            <h1>Register</h1>
            <Form>
                <Form.Group controlId="formBasicFirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="First Name" onChange={(e) => handleOnChange(e)} />
                    
                </Form.Group>

                <Form.Group controlId="formBasicLastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="Last Name" onChange={(e) => handleOnChange(e)} />
                    
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Username" onChange={(e) => handleOnChange(e)} />
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => handleOnChange(e)}/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckBox">
                    <Form.Label>Instructor ?</Form.Label>
                    <Form.Control type="checkbox" name="userGroupId" onChange={(e) => handleOnChangeStatus(e)}/>
                </Form.Group>

                <Button variant="primary" type="submit" block={true} onClick={(e)=> handleOnClick(e)}>
                    Submit
                </Button>
            </Form>
            <Container>
                <a href="/login">Already have account?</a>
            </Container>
        </Container>
    );
}

export default Register;
