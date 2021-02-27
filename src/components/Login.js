import React, { Component, useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {Container} from 'reactstrap';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import store from '../store/store';
import * as actions from '../actions/actions';

const Login = () => {
    
    const[login, setLogin] = useState({
        username: "",
        password: ""
    })

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let updated = {
            ...login,
            [name]: value
        };
        setLogin(updated);
    }

    let history = useHistory();

    const handleOnClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/login", login)
        .then(response => {
            alert(response.data.message);
            if (response.data.user !== null) {
                // store.dispatch(actions.setUser(response.data.user));
                localStorage.setItem("user", JSON.stringify(response.data.user));
                // console.log(store.getState());
                console.log(localStorage.getItem("user"));
                history.push('/');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Container style={{backgroundColor: "white"}}>
            <h1>Login</h1>
            <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" onChange={(e) => handleOnChange(e)} />
                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => handleOnChange(e)}/>
            </Form.Group>
            <Button variant="primary" type="submit" block={true} onClick={(e)=> handleOnClick(e)}>
                Submit
            </Button>
            </Form>
            <Container>
                <a className="" href="/register">New User?</a>
            </Container>
        </Container>
    );
}

export default Login;