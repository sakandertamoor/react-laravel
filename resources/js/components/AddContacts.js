import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";


class AddContacts extends React.Component {
    state ={
        fullName: '',
        email: '',
        phone:''
    }
    
    handleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }      
        saveContact = async (e) => {
        e.preventDefault();
        //console.log(this.state);
        
       const result =  await axios.post('/contact', this.state);
       this.setState({fullName: '', email: '',phone:''});
       if(result.data.status === 200){
        window.location.href = '/';
       }
  
    }
    
    render(){
        
        return(
            <div>
                <form onSubmit={this.saveContact}>
                    <div className='form-group'>
                        <input type='text' name='fullName' className='form-control'
                        value={this.state.fullName} onChange={this.handleInput} placeholder='Full Name' required/>
                    </div>

                    <div className='form-group'>
                        <input type='text' name='email' className='form-control'
                        value={this.state.email} onChange={this.handleInput} placeholder='Email' required/>
                    </div>

                    <div className='form-group'>
                        <input type='text' name='phone' className='form-control'
                        value={this.state.phone} onChange={this.handleInput} placeholder='Phone'required/>
                    </div>
                    <input type='submit'  className='btn btn-primary'
                        value='Add Contact' />

                </form>
            </div>
        )
    }
}

export default AddContacts;