import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Header() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(prev => !prev);
    };

    return (
        <>
            <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
                <Button className="btn btn-success d-lg-none" onClick={toggleNavbar}>
                    <GiHamburgerMenu />
                    <span className="visually-hidden">Toggle Menu</span>
                </Button>
                <div className='flex flex-1 justify-end'>
                    <Link to={"/"}><Button className='d-flex inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow btn btn-success'>
                        <IoLogOutOutline /> Logout
                    </Button></Link>
                </div>
            </header>

            <Navbar expanded={expanded} expand="lg" className="d-lg-none bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <span className="d-flex align-items-center gap-2">
                                <LuLayoutDashboard />
                                <Nav.Link href="/admin/dashboard" className="p-0">Dashboard</Nav.Link>
                            </span>
                            <span className="d-flex align-items-center gap-2">
                                <FaShoppingBasket />
                                <Nav.Link href="/admin/products" className="p-0">Products</Nav.Link>
                            </span>
                            <span className="d-flex align-items-center gap-2">
                                <MdAddShoppingCart />
                                <Nav.Link href="/admin/orders" className="p-0">Orders</Nav.Link>
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
