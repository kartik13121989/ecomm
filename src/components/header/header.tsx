import React from "react";
import {Navbar,Container,Nav,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">e-comm</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Button variant="secondary" className ="m-2">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="secondary" className ="m-2">
                            <Link to="/my-orders">My Orders</Link>
                        </Button>
                        <Button variant="secondary" className ="m-2">
                            <Link to="/checkout">Checkout</Link>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header;