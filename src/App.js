import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Topimg from './components/Topimg'
import Home from './Pages/Home'
import TeachersPage from './Pages/TeachersPage'
import InstitutionsPage from './Pages/InstitutionsPage'


function App() {
  return (
    
      
      
      <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Container className="p-0" fluid={true}>
      <Topimg />
        <Navbar />
        

        
        <div>
        <Switch>
        <Route exact path="/test2/teachers" component={TeachersPage} />
          <Route path="/" exact render={() => <Home title={"This is teacher Page"} />} />  
          <Route path="/Teachers" render={() => <TeachersPage title={"This is teacher Page"} />} />
          <Route path="/Institutes" render={() => <InstitutionsPage title={"This is sajkc Page"} />} />  
        </Switch>
        </div>

        <Footer />
      
      </Container>
      </Router>
        
      
    
    
    
  );
}


export default App;
