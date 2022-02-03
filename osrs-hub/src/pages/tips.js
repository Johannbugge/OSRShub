import Navbar from '../components/navbar.js';
import { Link, Outlet } from 'react-router-dom';
import styles from '../pages/tips.module.css';

const Tips = () => {
    return (
        <div className={styles.formatter}>
            <Navbar></Navbar>
        </div>
    );
};

export default Tips;
