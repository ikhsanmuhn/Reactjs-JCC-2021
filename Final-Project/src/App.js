import React from 'react';
import './App.css';
import { UserProvider } from './Context/UserContext';
import Routes from './Routes/Routes'
import 'antd/dist/antd.css'
import './Assets/css/style.css'

function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
