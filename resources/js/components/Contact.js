import axios from 'axios';
import React from 'react';


class Contact extends React.Component {
  
    render(){
        const {contact} = this.props;
        return(
            <div className='card mb-3'>
               <div className='card-body'>
                   <div className='row'>
                       <div className='col-md-2'>
                           <span className='image'>
                                {contact.fullName[0]}
                           </span>
                       </div>
                       <div className='col-md-2'>
                            {contact.fullName}
                       </div>
                       <div className='col-md-2'>
                            {contact.email}
                       </div>
                       <div className='col-md-2'>
                            {contact.phone}
                       </div>
                       <div className='col-md-2'>
                           <button className='btn btn-warning'> Edit
                           </button>
                       </div>
                       <div className='col-md-2'>
                           <button className='btn btn-danger'> Delete
                           </button>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default Contact;