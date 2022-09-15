import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import First from './images/about-img.svg'
import bullet from './images/list-item-icon.ddbd66ea.svg';

const Home = () => {
  return (
    <div>
        <div className='pt-4 mt-4 mb-4 pb-4'>
            <section className='container'>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img className='hero' src={First} alt="" />
                    </div>
                    <div className="col-md-6">
                    <h1 className="top">CRM & Project Management System </h1>
                    The most powerful and simple way to collaborate with your team.
                    <br /> <img src={bullet} alt="pic"  /> Keep a track of all your projects in most simple way.<br className='mt-1'/>
                    <br/><img src={bullet} alt="pic"  /> Assign tasks to project members and track the status. <br className='mt-1'/>
                    <br/> <img src={bullet} alt="pic"  /> Add members to your projects and keep them in sync with the progress.<br className='mt-1'/>
                    <Link to="/register" type='button' className=' mt-3 btn btn-rounded btn-primary'>Get Started</Link>
                        </div>
                </div>

            </section>
        </div>   
    </div>
  )
}

export default Home