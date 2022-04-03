import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ULink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true})
    return (
        <div>
            <Link style={{color: match ? '#ecf0f1' : 'black'}} to={to} {...props}>
                {children}
            </Link>
        </div>
    );
};

export default ULink;