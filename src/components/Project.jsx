import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



const Project = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/v1/projects/`)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

  return (
    <div className='container'>
        <Link to='/add-project' className='my-3 btn btn-primary'>
              <i className='fas fa-plus'></i> Add Project
              </Link>

      <div className="row">
        {posts.map((post)=>
            <div key={post.id} className="col-md-4 mb-3" >
            <div className="card">
              <h5 className="text-dark mt-2 px-3">{post.title}</h5>
    
              <div className="card-body">
                <p className="card-text">Client ID: {post.client}</p>
                <p className="card-text">Project status:{post.status}.</p>
                <Link to={`/project-detail/${post.id}`} className="btn btn-sm btn-outline-secondary">Read more</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    
    </div>
  )
}

export default Project