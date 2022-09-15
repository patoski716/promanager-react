import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import Alert from './Alert';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    login(email, password);
};

if (isAuthenticated)
    return <Navigate to='/dashboard' />;
  return (
    <section id="login" className="bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
        <p><Alert/></p>
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4>
                <i className="fas fa-sign-in"></i> <span className='text-purple'>Login</span></h4>
            </div>
            <div className="card-body">
              
                <form onSubmit={e => onSubmit(e)}>
                  
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input type="email" name="email" value={email}
                        onChange={e => onChange(e)} className="form-control" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="password2">Password</label>
                  <input type="password" name="password" value={password}
                        onChange={e => onChange(e)}
                        minLength='6' className="form-control" required/>
                </div>

                <input type="submit" value="Login" className="btn btn-primary mt-4 btn-block"/>
              </form>
              <div className="d-flex justify-content-center links">
                Don't have an account? <Link to="/register" style={{textDecoration:'none', color: 'white !important'}} className="ml-2">Sign Up</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);