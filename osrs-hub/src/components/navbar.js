import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import App from '../App.js';

const Navbar = (props) => {
    return (
        <div className={style.formatter}>
            <nav className={style.navbar}>
                <h2>OSRShub</h2>
                <Link to='/Home' className={style.link}>
                    {' '}
                    <li>H O M E</li>{' '}
                </Link>
                <Link to='/Tips' className={style.link}>
                    {' '}
                    <li>T I P S</li>{' '}
                </Link>
                <Link to='/Account' className={style.link}>
                    {' '}
                    <li>A C C O U N T</li>{' '}
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
