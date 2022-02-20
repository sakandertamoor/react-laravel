import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Contacts from './Contacts';
import AddContacts from './AddContacts';
import './app.css';
import EditContact from './EditContact';


function Example() {
    return (
        <Router>
        <>
            <Nav/>
            <div className='container'>
            <div className='row'>
            <div className='col-md-12'>
            <Routes>
                <Route path='/' element={<Contacts />} />
                <Route path='/addContact' element={<AddContacts />} />
                <Route path='/edit/:id' element={<EditContact />} />
            </Routes>
            </div>
            </div>
            </div>
        </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
