import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";
import Table from 'react-bootstrap/Table';

const Client = () => {
  const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/v1/clients/`)
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    
  return (
      <div>
      <Link to='/add-client' className='my-3 btn btn-primary'>
                    <i className='fas fa-plus'></i> Add Project Members
                    </Link>

                    <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Member ID</th>
                <th>Name</th>
                <th>Email</th>
                
                <th></th>
              </tr>
            </thead>
            

            <tbody>
              {posts.map((post)=>
                <tr key={post.id}>

                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.email}</td>
                
                <td className='text-center'><Link to={`/client-detail/${post.id}`} style={{textDecoration:'none',color:'#8e44ad'}}><i className="fa fa-eye"></i></Link></td>
              </tr>
              )}
              
            </tbody>
            

          </Table>

      </div>
    
  )
}

export default Client;