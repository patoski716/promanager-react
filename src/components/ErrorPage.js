import React from 'react'
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className='container' >
        <section id="login" className="mt-5 py-5">
    <div className="row">
        <div className="col-md-6 mx-auto">
            
            <div className='text-center'>
            <h2>Error 404 | Page Not Found</h2>

            <Link to='/' className='btn btn-primary'>Return Home</Link>

            </div>
            </div>
            </div>
            </section>
        </div >
  )
}

export default ErrorPage