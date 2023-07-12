import { NavLink } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <h1>404 NotFound</h1>
            <h3>Sorry 😔! We can't find what you are looking for.</h3>
            <NavLink to="/u/">Go Home</NavLink>
        </div>
    );
};
