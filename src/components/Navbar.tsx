import { Navbar as NavbarBs, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='mr-auto'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button onClick={openCart} variant='outline-primary' className='rounded-circle' style={{ position: "relative", height: "3rem", width: "3rem" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="6" cy="19" r="2"></circle>
                            <circle cx="17" cy="19" r="2"></circle>
                            <path d="M17 17h-11v-14h-2"></path>
                            <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style={{ color: "white", position: "absolute", height: "1.5rem", width: "1.5rem", right: "0", bottom: "0", transform: "translate(25%, 25%)" }}>
                            {cartQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}