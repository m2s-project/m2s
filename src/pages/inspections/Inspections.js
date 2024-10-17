import React from 'react'
import {  useLocation } from 'react-router-dom'
import "./inspections.css"
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
const Inspections = () => {
const location=useLocation()
console.log(location);

  return (
    <div className='inspections'>
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

export default Inspections
