import React , { useState } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Login from './Login';
import Submissions from './Submissions';
import Contact from './Contact';
import Home from './Home';
import Quiz from './Quiz';
import Register from './Register';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logout = () => {
        localStorage.clear();
        console.log(localStorage);
    }

    return (
        <div>
            <Router>
                <Navbar color="info" light expand="md">
                <NavbarBrand href="/">Cram Crush</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/submissions">Submissions</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/contact">Contact Us</NavLink>
                        </NavItem>
                        <NavItem className="ml-auto">
                        <NavLink href="/login" onClick={() => logout()}>Log Out</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>

                <Switch>
                    <Route path="/submissions">
                        <Submissions />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/quiz">
                        <Quiz />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default NavBar
