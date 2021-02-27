import React, {useState, useEffect } from 'react'
import { Container, Table } from 'reactstrap'
import store from '../store/store';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Submissions = () => {
    const [submissions, setSubmissions] = useState([]);
    let history = useHistory();
    
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user === null) {
            history.push("/login");
        }

        axios.get(`http://localhost:8080/student/submissions/${user.userId}`)
            .then(response => {
                setSubmissions(response.data);
            })
            .catch(err => {

            })

    }, []);

    return (
        <Container style={{backgroundColor: "white"}}>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Start Datetime</th>
                    <th>End Datetime</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submit, index) => {
                       return (
                        <tr>
                        <th scope="row">{index}</th>
                        <td>{submit.startDatetime}</td>
                        <td>{submit.endDatetime}</td>
                        </tr>
                       ) 
                    })}
                </tbody>
            </Table>        
        </Container>
    )
}

export default Submissions

