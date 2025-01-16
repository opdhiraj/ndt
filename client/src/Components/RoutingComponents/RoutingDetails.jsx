import React from 'react'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'
import Homepage from '../HomePageComponent/Homepage'
const RoutingDetails = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/*' element={<Homepage/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default RoutingDetails