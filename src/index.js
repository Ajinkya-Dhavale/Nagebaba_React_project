import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './component/Home/Index.jsx';
import Nav from './component/Home/Nav.jsx';

//about pages
import About from './component/About/About.jsx';
import Footer from './component/Footer.jsx';
import About_Chairmain from './component/About/About_Chairman.jsx';
import About_Office from './component/About/About_Office.jsx';
import Seva from './component/Seva/Seva.jsx';

//Deposit 
import Fix from './component/Deposit/Fix.jsx';
import Deposit2 from './component/Deposit/Deposit2.jsx';
import Deposit3 from './component/Deposit/Deposit3.jsx';

//Karj
import Karj1 from './component/Karj/Karj1.jsx';
import Karj2 from './component/Karj/Karj2.jsx';
import Karj3 from './component/Karj/Karj3.jsx';
import Karj4 from './component/Karj/Karj4.jsx';


//feedback
import Feedback from './component/Feedback.jsx';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

ReactDOM.render(
  <>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/about1' element={<About_Chairmain></About_Chairmain>}></Route>
        <Route path='/about2' element={<About_Office></About_Office>}></Route>
        <Route path='/seva' element={<Seva></Seva>}></Route>
        <Route path='/thev' element={<Fix></Fix>}></Route>
        <Route path='/thev1' element={<Deposit2></Deposit2>}></Route>
        <Route path='/thev2' element={<Deposit3></Deposit3>}></Route>
        <Route path='/karj' element={<Karj1></Karj1>}></Route>
        <Route path='/karj1' element={<Karj2></Karj2>}></Route>
        <Route path='/karj2' element={<Karj3></Karj3>}></Route>
        <Route path='/karj3' element={<Karj4></Karj4>}></Route>

        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  </>
  ,document.getElementById('root')
)