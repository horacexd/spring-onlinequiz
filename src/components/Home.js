import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Container, CardDeck, Row
} from 'reactstrap';

import java from "../images/java.jpg";
import sql from "../images/sql.jpg";
import web from "../images/web_development.jpg";
import store from '../store/store';

const Home = () => {

    let history = useHistory();
    
    const handleClick = (type) => {
        history.push(`/quiz/${type}`);
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (user === null) {
            history.push('/login');
        }
    }, [])

    return (
        <div>
            <Container>
                <Row xs="3">
                    <Container style={{padding: "15px"}}>
                        <Card>
                            <CardImg top width="100%" src={java} width="318" height="180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Java</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Java Basic</CardSubtitle>
                                <CardText>Start to get tested on everything about Java</CardText>
                                <Button color="primary" onClick={() => handleClick("java")}>Start</Button>
                            </CardBody>
                        </Card>
                    </Container>
                    <Container style={{padding: "15px"}}>
                        <Card>
                            <CardImg top width="100%" src={sql} width="318" height="180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">SQL</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">SQL Query</CardSubtitle>
                                <CardText>Test whether you can manipulate data</CardText>
                                <Button color="primary" onClick={() => handleClick("sql")}>Start</Button>
                            </CardBody>
                        </Card>
                    </Container>
                    <Container style={{padding: "15px"}}>
                        <Card>
                            <CardImg top width="100%" src={web} width="318" height="180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Web</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Web Development</CardSubtitle>
                                <CardText>Get ready for everything about HTML, CSS, and JavaScript</CardText>
                                <Button color="primary" onClick={() => handleClick("web")}>Start</Button>
                            </CardBody>
                        </Card>
                    </Container>
                </Row>  
            </Container>
        </div>
    );
}

export default Home;



