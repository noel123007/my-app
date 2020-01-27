import React from 'react';
import './App.css';
import axios from 'axios';


class Getdata extends React.Component {
constructor(props){
    super(props);

    this.state= {
        formhide: false,
        data : []
    }
}


handleFormSubmit = event => {
    event.preventDefault();
    
    axios({
        method: 'get',
        url: 'http://localhost/action_page_get.php',
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then((response) => {
        //handle success
        this.setState({
            data : response.data,
            formhide : true
        })
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
}


render(){
    const { formhide,data } = this.state;
    console.log(this.state.formhide,'gdata1');
    if (!formhide) {
        return  (
            <div className="center">
                <form >
                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Get data" />
                </form>
            </div>
        )
      } 
    else {
        console.log(this.state.formhide,'gdata2');
        return (
            <div className="center">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>contact</th>
                            <th>email</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data &&  data.records.map((obj,i) => {
                            return (
                                <tr key={i}><td>{obj.namee}</td><td>{obj.contact}</td><td>{obj.email}</td><td>{obj.message}</td></tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
          )  
      }   
}
}

export default Getdata;

