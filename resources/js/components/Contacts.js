import axios from 'axios';
import React from 'react';


class Contacts extends React.Component {
    state ={
        contacts: [],
        loading: true
    }

    fetchContacts = async () => {
        try {
            const result = await axios.get('/contact');
                if(result.data.status ===200){
                    this.setState({'contacts':result.data.contact , 'loading':false});
                }
             }catch (e){
               console.log(e)
        }
    }
    componentDidMount(){
        this.fetchContacts();
    }
    render(){
        if(this.state.loading){
            return  <h1>Loading..</h1>
        }
        return(
            <div>
                <h1>Contacts Directory</h1>
            </div>
        )
    }
}

export default Contacts;