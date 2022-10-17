import React, { Component } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import FormPage from "./RegistrationsForm";
import RegistrationShowPage from "./RegistrationShowPage";

// import NavBar from "./NavBar";

class App extends Component {
  render(){
    return (
      <Routes>
        <div className="App">
          <Route exact path="/" component={FormPage}/>
          <Route exact path="/registrations/:id" component={RegistrationShowPage} />
        </div>
      </Routes>
    );
  } 
}

export default App;

