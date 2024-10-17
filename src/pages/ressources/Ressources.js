import React from 'react'
import {  useLocation } from 'react-router-dom'
import "./ressources.css"
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
const Ressources = () => {
const location=useLocation()
console.log(location);

  return (
    <div className='ressources'>
     <div className="col-12 title">
        <Breadcrumbs />
        <div>Autres..</div>{" "}
      </div>
    
      <div className='col-6'>col-6</div>
      <div className='col-4'>col-4</div>
      <div className='col-2'>col-2</div>
    </div>
  )
}

export default Ressources
