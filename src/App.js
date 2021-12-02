import React from 'react';
import './App.css';

import logo from './asset/logo.png'

class App extends React.Component{
  url= "https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state = {
      userName: " " ,
      nameError: " "
    }
  }
  onClick=($event) =>{
    console.log(" save button is clicked:", $event );
    window.open(this.url, "_blank");
  }
  onNameChange =(event) => {
    console.log(" value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value})
    
    if (nameRegex.test(event.target.value)){
      this.setState({nameError: " "})

    }else{
      this.setState({nameError: " Name is incorrect"})
    }
  }
  render() {
    return ( 
      <>
        <div>
          <h1> Hello  {this.state.userName} From Bridglabz </h1>
          <img src={logo} onClick={this.onClick}
         alt="The Bridglabz logo : a Bridge to Employment through  lab works " />
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <body>
      <p>At Bridgelabz, we're a techie community of</p>
        <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
        </ul>
        <p>Working together to keep the Tech Employability of Engineers alive and accessiable ,
            so Tech Companies worldwide can get contribution and creators for Technology Solution.
            We believe this act of human collabration across an employability platform is essential
            to individual growth and our collective future.</p>

        <p> To Know about us , visit <a href="https://www.bridgelabz.com">BridgeLabz</a>
            to learn even more about our mission i.e <strong>Employability to all</strong>.
        </p>
    </body>
      </>
    );
  }
}
export default App;