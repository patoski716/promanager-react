import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const ProjectDetail = () => {
    let params = useParams()
    let postId = params.id
    let navigate= useNavigate()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [postId]);

    let url = `https://promanager-django.herokuapp.com/api/v1/projects/delete_project/${postId}/`
    let method = 'DELETE'

    let deleteclient = async (e) => {
        e.preventDefault()
        await fetch(url, {method:method})
        alert('Project deleted Successfully')
        navigate('/dashboard')
    }
  return (
    <div>
        <div className="container mt-3">
            <Link style={{textDecoration:'none',color:'#8e44ad'}} to='/dashboard' className="btn btn-sm btn-outline-secondary">Back</Link>
            <div className="row">
    
    <div className="col-md-6 mt-4" >
        <div className="card">
            <h2 className="text-dark mt-2 px-3">{posts.title}</h2>

            <div className="card-body">
                <p className="card-text">Project Status:{posts.status}</p> 
                <p className="card-text">{posts.description}</p>
                <hr />
                <h1>Client Information</h1>
                <h4 className="card-text">Member ID: {posts.client}</h4>


                <button onClick={deleteclient}style={{textDecoration:'none',color:'red',border:'none'}} className="btn btn-sm btn-outline-light"><i className="px-3 fa fa-trash"></i></button>
            </div>
        </div>
    </div>
</div>
        </div>
    </div>
  )
}

export default ProjectDetail