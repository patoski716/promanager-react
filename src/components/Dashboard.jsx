import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Client from './Client';
import Project from './Project';

const Dashboard = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);
    const logout_user = () => {
        logout();
        setRedirect(true);
    };

    if(redirect){
      return <Navigate to={{ pathname: '/login' }} />;
    };

  return (
    <div className="container">
      
      <div className="row">
          <div className="col-md-6 align-items-center">
              <h1>Dashboard</h1>
              
          </div>

          <div className="col-md-6 text-right">
              
              <button  onClick={logout_user} className='my-3 btn btn-primary'>
              <i className='fas fa-sign-out-alt'></i> Logout
              </button>
             
          </div>
      
      </div>
      <Project/>
      <Client/>

    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Dashboard);