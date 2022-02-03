import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accounts from './pages/accounts.js';
import Tips from './pages/tips.js';
import Menu from './components/menu.js';
import Navbar from './components/navbar';

function App(props) {
    const [data, setData] = useState();

    function componentDidMount() {
        this.callBackendApi()
            .then((res) => this.setData({ data: res.express }))
            .catch((err) => console.log(err));
    }

    function callBackendApi = async () => {
      const respone = await fetch('/express_backend');
      const body = await respone.json();

      if(response.status !== 200) {
        throw Error(body.message)
      }
      return body;
    }
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <Landing></Landing>
            </div>
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/tips' element={<Tips />} />
                <Route path='/account' element={<Accounts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
