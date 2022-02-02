import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accounts from './pages/accounts.js';
import Tips from './pages/tips.js';
import Menu from './components/menu.js';

function App(props) {
    return (
        <BrowserRouter>
            <div className='App'>
                <Landing></Landing>
            </div>
            <Routes>
                <Route path='/Home' component={<Menu />} />
                <Route path='/Tips' component={<Tips />} />
                <Route path='/Account' component={<Accounts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
