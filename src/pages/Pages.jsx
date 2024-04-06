import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import {Route, Routes} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';




function Pages() {
 
  return (
      <AnimatePresence >
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/Cuisine/:type' element={<Cuisine/>}/>
          <Route path='/Searched/:search' element={<Searched />}/>
          <Route path='/recipe/:name' element={<Recipe />} />
        </Routes>
      </AnimatePresence>

  )
}

export default Pages
