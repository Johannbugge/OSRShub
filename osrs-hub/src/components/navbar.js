import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import App from '../App.js';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={style.formatter}>
            <nav className={style.navbar}>
                <h2>OSRShub</h2>
                <Link exact to='/' className={style.link}>
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
