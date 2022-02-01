import { Link } from 'react-router-dom';
import React from 'react';



const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/* <li>
                        <Outlook />
                    </li> */}
                </ul>
            </nav>


        </div>

    )
};

export default Layout;