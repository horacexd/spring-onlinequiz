import {React, useEffect, useState} from 'react'
import axios from 'axios';
import { Alert, Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import "./Quiz.css";
import {useHistory} from 'react-router-dom';

const API_URL = "http://localhost:8080";

const Quiz = () => {

    let user = JSON.parse(localStorage.getItem("user"));
    let history = useHistory();

    const [state, setQuiz] = useState([]);
    const [answer, setAnswer] = useState({
        startDatetime: (new Date()).getTime(),
        endDatetime: 0,
        submittedQuiz: [],
        userId: user.userId
    });
    

    useEffect(() => {
        async function fetchData() {
            let type = (window.location.href).substring(27);
            // console.log(type);
            await axios.get(`${API_URL}/student/quiz/${type}`)
                .then(response => {
                    setQuiz(response.data);
                    // console.log(state);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    const handleOnClick = (e, questionId, choiceId) => {
        e.target.classList.add("alert-success");
        // e.target.classList.add("active");
        e.target.classList.remove("alert-info");
        
        let updated = [...answer.submittedQuiz];
        
        // updated.forEach(obj => {
        //     if (obj.questionId === questionId) {
        //         obj.choiceId = choiceId;
        //         setAnswer(updated);
        //         console.log(answer);
        //         return;
        //     }
        // });

        updated.push({questionId, choiceId});
        setAnswer({
            ...answer,
            submittedQuiz: updated
        });
        console.log(answer);
        // console.log(`
        //     -------Click------
        //     Question: ${questionId}
        //     Choice: ${choiceId}
        // `);
    }

    const handleOnSubmit = () => {
        
        setAnswer({
            ...answer,
            endDatetime: (new Date()).getTime() 
        });

        console.log(answer);
        // axios.post("http://localhost:8080/student/quiz/submit", answer)
        //     .then(response => {
        //         alert(response.data);
        //         history.push('/');
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
            <Container>
            <ListGroup>
                {state.map(question => {
                    return (
                        <ListGroupItem key={question.questionId}>
                            {question.questionContent}
                            <Container>
                            <br />
                                {question.questionChoiceList.map(choice => {
                                    return (
                                        <div>
                                        <Alert color="info" 
                                            key={choice.choiceId}
                                            onClick={(e) => handleOnClick(e, question.questionId, choice.choiceId)}
                                        >
                                            {choice.choiceContent}
                                        </Alert>
                                        </div>
                                    );
                                })}
                            </Container>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
            <Button 
                color="primary" 
                onClick={() => handleOnSubmit()}
                block={true}
            >Submit</Button>
        </Container>
    );
}

export default Quiz;
