import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import PropTypes from 'prop-types';


const Register = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
});

const { name, email, password, password2 } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    if (password !== password2)
        setAlert('Passwords do not match', 'error');
    else
        signup({ name, email, password, password2 });
};

if (isAuthenticated)
    return <Navigate to='/dashboard' />;
  return (
    <section id="register" className="bg-light mt-5 py-5 mb-5 pb-5">
    <div className="container ">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4>
                <i className="fas fa-user-plus"></i><span className='text-purple'> Register</span></h4>
            </div>
            <div className="card-body">
              
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="name" className="form-control" value={name}
                        onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email}
                        onChange={e => onChange(e)} className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Password</label>
                  <input type="password" name="password" value={password}
                        onChange={e => onChange(e)}
                        minLength='6' className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" name="password2" value={password2}
                        onChange={e => onChange(e)}
                        minLength='6' className="form-control" required/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary mt-4 btn-block"/>
              </form>
              <div className="d-flex justify-content-center links">
                Already have an account? <Link to="/login" style={{textDecoration:'none', color: 'black !important'}} className="ml-2">Login</Link>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { setAlert, signup }) (Register);