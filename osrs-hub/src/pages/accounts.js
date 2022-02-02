import Navbar from '../components/navbar.js';
import { Link, Outlet } from 'react-router-dom';

const Accounts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Accounts;
