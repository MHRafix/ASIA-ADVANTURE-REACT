import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../../../CustomHooks/useFirebase';
import Logo from '../../../logo.png';

const Header = () => {
    const history = useHistory();
    const { user, handleSignOut } = useFirebase();

    // Make logout function
    const handleLogOut = () => {
          handleSignOut();
          user.email = '';
          history.push('/login');
    }


    return (
        <header >
            <div className="headerSection">
                <div className="headerNavbar">
                <Navbar fixed="top" expand="lg">
                    <Container>
                        <Navbar.Brand> <img src={Logo} alt="Logo" width="150" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link id="navBar" to="/home">Home</Link>
                           
                           { user?.email ? <div className="secureRoute">
                            <Link id="navBar" to="/myorders">My Orders</Link>
                            <Link id="navBar" to="/allorders">Manage Orders</Link>
                            <Link id="navBar" to="/postPackage">Add Package</Link>
                            </div> : <></>

                            }
                        </Nav>
                            <div className="accountPage">
                                {
                                    user.email ? <> <span>{user.displayName}</span> <button onClick={ handleLogOut } className="createAccBtn">Logout</button> </>
                                       :   <Link id="navBar" to="/login">
                                  <button className="createAccBtn">Login</button></Link>
                                }
                             
                            </div>

                        </Navbar.Collapse>
                      </Container>
                    </Navbar>
                </div>
            </div>
        </header>
    );
};

export default Header;