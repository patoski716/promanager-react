import React, { useEffect,useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom'

const EditClient = () => {
    let navigate = useNavigate()
    let params = useParams()
    let postId = params.id
    
    
        
    const initialFormData = Object.freeze({
		id: '',
		name: '',
		email: '',
        phone:''
		
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axios.get(`http://localhost:8000/api/v1/clients/delete_client/${postId}/`).then((res) => {
			updateFormData({
				...formData,
				['name']: res.data.name,
				['email']: res.data.email,
                ['phone']: res.data.phone
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.phone]: e.target.value,

            
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);
        axios({
            method: "PUT",
            url:`https://promanager-django.herokuapp.com/api/v1/clients/delete_client/${postId}/`,
        data:{
            name: formData.name,
			email: formData.email,
            phone: formData.phone
            }
        })
        .then((res) => {
            console.log(res);
            formData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        alert('Updated Successfully')
		navigate('/dashboard');
	};
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
        <i className="fas fa-user-edit"></i> Update Member Data</h4>
    </div>
    <div className="card-body">
      
      <form>
        <div className="form-group">
          <label htmlFor="name">Name<span className='text-danger'>*</span></label>
          <input type="text"  className="form-control" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="text">Email<span className='text-danger'>*</span></label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="text">Phone<span className='text-danger'>*</span></label>
          <input type="text"  className="form-control" name="phone" value={formData.phone} onChange={handleChange}/>
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

export default EditClient