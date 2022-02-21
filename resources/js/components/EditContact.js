import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


class EditContact extends React.Component {
    state ={
        fullName: '',
        email: '',
        phone:''
    }
    
    handleInput = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }      
    updateContact = async (e) => {
        e.preventDefault();
    }
    async componentDidMount(){
       const id = this.props.match.params.id;
        console.log(id, 'asd');
        const result = await axios.get(`/contact/${id}/edit`);
        //console.log(result);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.updateContact}>
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
                        value='Edit Contact' />

                </form>
            </div>
        )
    }


}
export default EditContact;