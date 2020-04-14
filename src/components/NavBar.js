import React from 'react';
import { Link } from '@reach/router';
import { Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Nav activeKey="/home">
            <Nav.Item>
            <p> <Link to="/">Home</Link>{" "}</p>
            </Nav.Item>
            <Nav.Item>
            <p><Link to="/inspiration">Inspiration</Link></p>
            </Nav.Item>
            <Nav.Item>
            <p><Link to="/dogs">Dogs</Link></p>
            </Nav.Item>
            <Nav.Item>
            <p><Link to="/search-dogs">Search Breeds</Link></p>
            </Nav.Item>
            <Nav.Item>
            <p><Link to="/no-dogs">I don't like dogs</Link></p>
            </Nav.Item>
        </Nav>


    )
}

export default NavBar