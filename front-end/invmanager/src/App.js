import React from 'react';
import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login  from './Login.js';
import Register from './Register.js';
import Item from './Item.js';

export const InvGlobal = createContext();

function App() {

  const [ itemList, setItemList ] = useState([{}]);
  const [ userList, setUserList ] = useState({FirstName: 'guest', LastName: 'guest', UserName: 'guest', password: 'guest'});
  const [ currentUser, setUserInfo ] = useState({FirstName: 'guest', LastName: 'guest', UserName: 'guest', password: 'guest'});
  // const [ error, setError ] = useState({});
  // const [ isSubmitted, setIsSubmitted ] = useState(false);

  return (
    <InvGlobal.Provider value={{
      itemList, setItemList,
      userList, setUserList,
      currentUser, setUserInfo,
      // error, setError,
      // isSubmitted, setIsSubmitted


    }}>

    <Router>
        <Routes>
          <Route path ='/' element={< Home />}></Route>
          <Route path ='/Login' element={< Login />}></Route>
          <Route path ='/Register' element={< Register />}></Route>
          <Route path ='/Item' element={< Item />}></Route>
        </Routes>
      </Router>
    </InvGlobal.Provider>

  );
}

export default App;