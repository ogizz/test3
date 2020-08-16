import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Topimg from './components/Topimg'
import Home from './Pages/Home'
import TeachersPage from './Pages/TeachersPage'
import InstitutionsPage from './Pages/InstitutionsPage'
import ParticipantsPage from './Pages/ParticipantsPage';



function App() {
  document.title = "Internation Day of Yoga 2020"
  return (
    
      
      <Router basename={`${process.env.PUBLIC_URL}`}>
      <Container className="p-0" fluid={true}>
      <Topimg />
        <Navbar />
        

        
        <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Teachers' component={TeachersPage}  />
          <Route path="/Institutes" component={InstitutionsPage} />  
          <Route path="/Participants" component={ParticipantsPage} />  
        </Switch>
        </div>

        <Footer />
      
      </Container>
      </Router>
        
      
    
    
    
  );
}


export default App;
