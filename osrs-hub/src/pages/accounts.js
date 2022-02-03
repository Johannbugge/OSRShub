import Navbar from '../components/navbar.js';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import styles from '../pages/accounts.module.css';

const Accounts = () => {
    const [name, setName] = useState('hello');
    return (
        <div className={styles.formatter}>
            <Navbar></Navbar>
            <div className={styles.form}>
                <h4>Find your account</h4>
                <label className={styles.label}>
                    <p>Enter Account Name:</p>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className={styles.button}>Look up</button>
                </label>
            </div>
        </div>
    );
};

export default Accounts;
