import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditRequirement = () => {
  const [requirement, setRequirement] = useState({
    ReqName: '',
    trainingArea: '',
    reqCategory: '',
    institution: '',
    duration: 0,
  });

  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    // Fetch the data for the requirement with the given id
    axios.get(`http://localhost:8080/view/${id}`).then((response) => {
      setRequirement(response.data);
    });
  }, [id]);

  const onChange = (e) =>
    setRequirement({ ...requirement, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/update/${id}`, requirement).then((response) => {
      console.log(response.data);
    });
  };

  return (

    <div>
        
        {/* <Navbar/>  */}
            <div className="container-16">
                <div className="container-20">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                                <span className="title">Curriculum Tracker</span>
                            </a>
                        </li>

                    


                      





                        <li>
                            <a href="/AdminPanel">
                                <span className="icon">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </span>
                                <span className="title">View Curriculum &nbsp;
                                    <ion-icon name="chevron-down-circle-outline" className="ddicon"></ion-icon></span>
                            </a>
                        </li>





                    </ul>
                </div>


                <div className="main">
                    <div className="topbar">
                        <div className="toggle">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search here" />
                                <ion-icon name="search-outline"></ion-icon>
                            </label>
                        </div>
                        <br />
                        

                        <div className="user">
                            <img src="" alt="" />
                        </div>
                    </div>

                    {/* Req Form starts here */}
                    <div className="details">
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <h2>Requirement Form</h2>
                                {/* <a href="#" class="btn">View more</a> */}
                            </div>
                            <br /><br />
                            {/* <div className='card'> */}
                            <div className="col-xl-12"></div>
    <div className='container'>
      <h1>Edit Requirement</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='ReqName'>Requirement Name</label>
          <input
            type='text'
            className='form-control'
            name='ReqName'
            value={requirement.ReqName}
            onChange={onChange}
            placeholder='Enter Requirement Name'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='trainingArea'>Training Area</label>
          <input
            type='text'
            className='form-control'
            name='trainingArea'
            value={requirement.trainingArea}
            onChange={onChange}
            placeholder='Enter Training Area'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='reqCategory'>Requirement Category</label>
          <input
            type='text'
            className='form-control'
            name='reqCategory'
            value={requirement.reqCategory}
            onChange={onChange}
            placeholder='Enter Requirement Category'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='institution'>Institution</label>
          <input
            type='text'
            className='form-control'
            name='institution'
            value={requirement.institution}
            onChange={onChange}
            placeholder='Enter Institution'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            className='form-control'
            name='duration'
            value={requirement.duration}
            onChange={onChange}
            placeholder='Enter Duration'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Save Changes
        </button>
      </form>
    </div>

    </div>
    </div>
    </div>
    </div>
   </div>
  );
};

export default EditRequirement;
