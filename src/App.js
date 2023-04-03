
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import News from './components/News';
// import AddPreviousAndNext from './components/New2/AddPreviousAndNext'

// tut 3
// import PropTypesInReact from './components/Tut3AddPropsInNavbar/PropTypesInReact';


// tut 4
import ReduceCode from './components/Tut4 reduceCode/ReduceCode';


import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
      <div>

          
      {/* <PropTypesInReact pageSize={6}  category='general' country='in'/> */}
             {/* <News pageSize="6"/> */}
        {/* <AddPreviousAndNext /> */}  

      {/* for tut 3 */}
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/general" element= <PropTypesInReact key='general' Category="general" PageSize={6} Country="in"/>/>
          <Route exact path="/business" element= <PropTypesInReact key='business' Category="business" PageSize={6} Country="in"/>/>
          <Route exact path="/health" element= <PropTypesInReact key='health' Category="health" PageSize={6} Country="in"/>/>
          <Route exact path="/science" element= <PropTypesInReact key='science' Category="science" PageSize={6} Country="in"/>/>
          <Route exact path="/sports" element= <PropTypesInReact key='sports' Category="sports" PageSize={6} Country="in"/>/>
          <Route exact path="/technology" element= <PropTypesInReact key='technology' Category="technology" PageSize={6} Country="in"/>/>
        </Routes>
      </Router> */}


      {/* tut 4 */}
      
       <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/general" element= <ReduceCode key='general' Category="general" PageSize={6} Country="in"/>/>
          <Route exact path="/business" element= <ReduceCode key='business' Category="business" PageSize={6} Country="in"/>/>
          <Route exact path="/health" element= <ReduceCode key='health' Category="health" PageSize={6} Country="in"/>/>
          <Route exact path="/science" element= <ReduceCode key='science' Category="science" PageSize={6} Country="in"/>/>
          <Route exact path="/sports" element= <ReduceCode key='sports' Category="sports" PageSize={6} Country="in"/>/>
          <Route exact path="/technology" element= <ReduceCode key='technology' Category="technology" PageSize={6} Country="in"/>/>
        </Routes>
      </Router>
    </div>
    </>
    )
  }
}





