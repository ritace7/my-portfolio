import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>Back To The <Link className='link-items' to="/"> HomePage</Link>...</p>
        </>
     );
}
 
export default NotFound;