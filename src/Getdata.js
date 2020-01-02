import React from 'react';
import './App.css';
import axios from 'axios';


class Getdata extends React.Component {
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
      method: 'get',
      url: 'http://localhost/action_page_get.php',
      
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then((response) => {
      this.setState({
          data : response.data,
          formhide : true
      })
    console.log(response.data)
  })
}


render(){
    const { formhide,data } = this.state;
    console.log(data && data.records , 'rec')
    if (!formhide) {
        return  (
            <div className="center">
            <form >
                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Get data" />
            </form>
        </div>
        )
      } else {
          console.log('inisde')
        return (
            <table className='list'>
                <tr>
                    <th>Name</th>
                    <th>contact</th>
                    <th>email</th>
                    <th>message</th>
                </tr>
                {
                   data &&  data.records.map((obj,i) => {
                       return (
                           <tr key={i}><td>{obj.namee}</td><td>{obj.contact}</td><td>{obj.email}</td><td>{obj.message}</td></tr> 
                        )
                   })
                }
            </table>
          )  
      }   
}
}

export default Getdata;

