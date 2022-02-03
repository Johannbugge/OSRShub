import style from './landing.module.css';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import Mainpage from './menu.js';
import App from '../App';

const Landing = (props) => {
    const [display, setDisplay] = useState(true);
    if (display) {
        return (
            <div className={style.formatting}>
                <img className={style.logo} src={logo}></img>
                <button
                    onClick={() => setDisplay(false)}
                    className={style.button}
                >
                    C O N T I N U E
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <div className={style.transition}></div>
                <Mainpage></Mainpage>
            </div>
        );
    }
};

export default Landing;
