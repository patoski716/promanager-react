import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom'
const AddProject = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        axios
        .get(`https://promanager-django.herokuapp.com/api/v1/clients/`)
        .then((res) => {
            console.log(res);
            setClients(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    let navigate = useNavigate()
    const [post, setFormDoc] = useState(null)
    let handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Submit data triggerd...')      

        let postTitle = post?.title
        let postDescription = post?.description
        let postStatus = post?.status
        let postClient = post?.client


        if(postClient === '' || postClient === undefined ){
            postClient = String(postClient).trim()
            alert('Client cannot be empty.')
            return 
          }
    
        if(postTitle === '' || postTitle === undefined ){
          postTitle = String(postTitle).trim()
          alert('Title cannot be empty.')
          return 
        }
        
        if( postDescription === '' || postDescription === undefined ){
            postDescription = String(postDescription).trim()
            alert('description cannot be empty.')
            return
        }
        if( postStatus === '' || postStatus === undefined ){
          postStatus = String(postStatus).trim()
          alert('status cannot be empty.')
          return
      }

      let url = 'https://promanager-django.herokuapp.com/api/v1/projects/'
      let method = 'POST'
      axios({
          method: method,
          url:url,
      data:{
          title: postTitle,
          description: postDescription,
          status: postStatus,
          client: postClient,
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
  
  
      alert('Project added Successfully')
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
                <i className="fas fa-user-plus"></i> Add Project</h4>
            </div>
            <div className="card-body">
              
              <form>
                <div className="form-group">
                  <label htmlFor="name">Client Name<span className='text-danger'>*</span></label>
                  
                  <select value={post?.client} onChange={(e) => { setFormDoc({ ...post, 'client': e.target.value}) }} className="form-select" id="">
                <option>Select Client</option>
                  {clients.map((client,index)=>
                  <option value={client.id}>{client.name}</option> 
                  )}
                    </select>

                </div>
                <div className="form-group">
                  <label htmlFor="name">Title<span className='text-danger'>*</span></label>
                  <input type="text"  className="form-control" value={post?.title} onChange={(e) => { setFormDoc({ ...post, 'title': e.target.value}) }}/>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Description<span className='text-danger'>*</span></label>
                  <textarea type="text" className="form-control" value={post?.description} onChange={(e) => { setFormDoc({ ...post, 'description': e.target.value}) }}/>
                </div>

                <div className="form-group">
                  <label htmlFor="text">Status<span className='text-danger'>*</span></label>
                  <select value={post?.status} onChange={(e) => { setFormDoc({ ...post, 'status': e.target.value}) }} className="form-select">
                  <option>Select Status</option>
                    <option value="COMPLETED" >Completed</option>
                    <option value="IN PROGRESS">In progress</option>
                    <option value="NOT STARTED">Not started</option>
                </select>
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
  )
}

export default AddProject