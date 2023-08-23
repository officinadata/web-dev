import React from 'react';

import { withTooltip } from '@visx/tooltip';

import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Evaluate from "./pages/Evaluate"
import Contribute from "./pages/Contribute"
import About from "./pages/About"
import Events from "./pages/Events"
import Reports from "./pages/Reports"

function App({ tooltipOpen, tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip }) {
  return (

      <Router>
      
        {/*<Navbar />*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} exact />
          <Route path='/evaluate' element={<Evaluate />} exact />
          <Route path='/contribute' element={<Contribute />} exact />
          <Route path='/events/:id' element={<Events />} exact />
          <Route path='/reports/:id' element={<Reports />} exact />
        </Routes>
      </Router>

  );
}

export default withTooltip(App);

