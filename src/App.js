import React from 'react';
import './App.css';
import axios from 'axios';
import Getdata from './Getdata';

class App extends React.Component {
constructor(props){
    super(props);

    this.state= {
        name: '',
        contact: '',
        email: '',
        message: '',
        formhide: false,
        data : []
    }
}

handleFormSubmit( event ) {
    event.preventDefault();
    let formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('contact', this.state.contact)
    formData.append('email', this.state.email)
    formData.append('message', this.state.message)

    axios({
      method: 'post',
      url: 'http://localhost/action_page_post.php',
      data: formData ,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
       /*  this.setState({
            formhide : true,
        }); */
        console.log(response)
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
}

render(){
    const { formhide } = this.state.formhide;
    
    if (!formhide) {
        console.log(this.state.formhide,'app1');
        return  (
            <div className="center">
                <form >
                    <label>Name</label>
                    <input type="text" id="name" name="name" value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}/>
            
                    <label>Contact</label>
                    <input type="number" id="contact" name="contact" value={this.state.contact}
                        onChange={e => this.setState({ contact: e.target.value })}/>
            
                    <label>Email</label>
                    <input type="email" id="email" name="email" value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}/>
            
                    <label>Message</label>
                    <textarea id="message" name="message" placeholder="Your message.."  value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}></textarea>
            
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
                </form>
            </div>
        )
    } 
    else {
        console.log(this.state.formhide,'app2');
        return(
            <Getdata />
        )
    }   
}
}

export default App;

