import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

export const NavbarComponent = () => {
    const categoryList = ["cpu", "storage", "ram", "monitor", "keyboard", "mouse", "power_supply", "motherboard"]
    const { data, status } = useSession()
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">My Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <NavDropdown title="Category" id="collasible-nav-dropdown">
                            {
                                categoryList.map(((category, index) => (
                                    <NavDropdown.Item
                                        key={index}
                                        href={`/products/${category}`}>{category.toUpperCase()}</NavDropdown.Item>
                                )))
                            }
                        </NavDropdown> */}
                        {
                            status === "authenticated" ?
                                <Nav.Link onClick={() => signOut()}>Sign Out</Nav.Link>
                                :
                                <Nav.Link href="/login">Sign in</Nav.Link>
                        }
                    </Nav>
                    <Link href={'/cart'}>
                        <Button variant="dark"><FiShoppingCart /></Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}