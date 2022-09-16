import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const ClientDetail = () => {
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

    let url = `https://promanager-django.herokuapp.com/api/v1/clients/delete_client/${postId}/`
    let method = 'DELETE'

    let deleteclient = async (e) => {
        e.preventDefault()
        await fetch(url, {method:method})
        alert('Member deleted Successfully')
        navigate('/dashboard')
    }
  return (
    <div>
        <div className="container mt-3">
            <Link style={{textDecoration:'none',color:'#8e44ad'}} to='/dashboard' className="btn btn-sm btn-outline-secondary">Back</Link>
            <div className="row">
    
                <div className="col-md-6 mt-4" >
                    <div className="card">
                        <h2 className="text-dark mt-2 px-3">Member ID: {posts.id}</h2>
                        <h4 className="text-dark mt-2 px-3">{posts.name}</h4>


                        <div className="card-body">
                            <p className="card-text">{posts.email}</p>
                            <p className="card-text">{posts.phone}</p>

                            <button onClick={deleteclient}style={{textDecoration:'none',color:'red',border:'none'}} className="btn btn-sm btn-outline-light"><i className="px-3 fa fa-trash"></i></button><span><Link to={`/edit-client/${posts.id}`} style={{textDecoration:'none',color:'#8e44ad'}}><i className="px-3 fa fa-edit"></i></Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientDetail