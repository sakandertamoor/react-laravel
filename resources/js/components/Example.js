import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, useHistory, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Contacts from './Contacts';
import AddContacts from './AddContacts';


function Example() {
    return (
        <Router>
        <>
            <Nav/>
            <div className='container'>
            <div className='row'>
            <div className='col-md-8'>
            <Routes>
                <Route path='/' element={<Contacts />} />
                <Route path='/addContact' element={<AddContacts />} />
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
