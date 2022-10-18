import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log("context", user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Awsome Auth</Link>
                <Link className="btn btn-ghost normal-case text-base" to='/home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-base" to='/oders'>Oders</Link>

                <Link className="btn btn-ghost normal-case text-base" to='/register'>Register</Link>
                {user?.email && <span>Welcome,{user.email}</span>}
                {
                    user?.email ?
                        <Link onClick={handleSignOut} className="btn btn-ghost normal-case text-base">Logout</Link>
                        :
                        <Link className="btn btn-ghost normal-case text-base" to='/login'>Login</Link>

                }

            </div>
        </div>
    );
};

export default Header;