import React,{ Component }from 'react';
import './App.css';
import Courses from './Courses';
import Contact from './Contact';
import About from './About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class Apply extends Component {
   render(){
   return (
      <Router>
     <div className='App'>
       <Route path='/About' component={About}/>
       <Route path='/Courses' component={Courses}/>
       <Route path='/Contact' component={Contact}/>
     </div>
     </Router>
   );
   }
 }
 
 export default Apply;
 