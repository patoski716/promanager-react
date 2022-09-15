import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom'


const AddClient = () => {
  let navigate = useNavigate()
    
    
    

    const [post, setFormDoc] = useState(null)
    
    let handleSubmit = async (e) => {
        e.preventDefault()

        

        console.log('Submit data triggerd...')      

        let postName = post?.name
        let postEmail = post?.email
        let postPhone = post?.phone


    
        if(postName === '' || postName === undefined ){
          postName = String(postName).trim()
          alert('Name cannot be empty.')
          return 
        }
        
        if( postEmail === '' || postEmail === undefined ){
            postEmail = String(postEmail).trim()
            alert('email cannot be empty.')
            return
        }
        if( postPhone === '' || postPhone === undefined ){
          postPhone = String(postPhone).trim()
          alert('phone cannot be empty.')
          return
      }

      let url = 'http://localhost:8000/api/v1/clients/'
      let method = 'POST'
      axios({
          method: method,
          url:url,
      data:{
          name: postName,
          email: postEmail,
          phone: postPhone,
          created_by:2,
          
          }
      })
      .then((res) => {
          console.log(res);
          setFormDoc(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  
  
      alert('Member added Successfully')
      navigate('/dashboard')
    }
  return (
    <div className="container mt-3">
            <Link style={{textDecoration:'none',color:'#8e44ad'}} to='/dashboard' className="btn btn-sm btn-outline-secondary">Back</Link>

    <section id="register" className=" mt-3 py-5 mb-5 pb-5">
    <div className="container ">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4>
                <i className="fas fa-user-plus"></i> Add Project Member</h4>
            </div>
            <div className="card-body">
              
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name<span className='text-danger'>*</span></label>
                  <input type="text"  className="form-control" value={post?.name} onChange={(e) => { setFormDoc({ ...post, 'name': e.target.value}) }}/>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Email<span className='text-danger'>*</span></label>
                  <input type="email" className="form-control" value={post?.email} onChange={(e) => { setFormDoc({ ...post, 'email': e.target.value}) }}/>
                </div>

                <div className="form-group">
                  <label htmlFor="text">Phone<span className='text-danger'>*</span></label>
                  <input type="text"  className="form-control" value={post?.phone} onChange={(e) => { setFormDoc({ ...post, 'phone': e.target.value}) }}/>
                </div>
                
                <button onClick={handleSubmit} className="btn btn-dark mt-4">Submit</button>
              </form>            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
            
    </div>
  )}

export default AddClient;