import Navbar from './navbar.js';
import style from './menu.module.css';
import Skills from './skills.js';

const Mainpage = () => {
    return (
        <div className={style.formatter}>
            <Navbar></Navbar>
            <Skills></Skills>
        </div>
    );
};

export default Mainpage;
