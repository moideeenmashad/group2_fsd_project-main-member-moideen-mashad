import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/viewall')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/delete/${id}`)
      .then(response => {
        setData(data.filter(requirement => requirement._id !== id));
        alert('Requirement deleted successfully.');
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (

    <div>
        
         
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
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="clipboard-outline"></ion-icon>
                                </span>
                                <span className="title"></span>
                            </a>
                        </li>


                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="receipt-outline"></ion-icon>
                                </span>
                                <span className="title"> &nbsp;
                                    <ion-icon name="chevron-down-circle-outline" className="ddicon"></ion-icon></span>



                            </a>

                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="receipt-outline"></ion-icon> */}
                                </span>
                                <span className="title"></span>

                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="receipt-outline"></ion-icon> */}
                                </span>
                                <span className="title"></span>

                            </a>
                        </li>



                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </span>
                                <span className="title">View Curriculum &nbsp;
                                    <ion-icon name="chevron-down-circle-outline" className="ddicon"></ion-icon></span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                                </span>
                                <span className="title"></span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                                </span>
                                <span className="title"></span>
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
                                <h2>Approved curriculums</h2>
                                {/* <a href="#" class="btn">View more</a> */}
                            </div>
                            <br /><br />
                            {/* <div className='card'> */}
                            <div className="col-xl-12"></div>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Requirement Name</th>
            <th>Training Area</th>
            <th>Requirement Category</th>
            <th>Institution</th>
            <th>Duration (in weeks)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(requirement => (
            <tr key={requirement._id}>
              <td>{requirement.ReqName}</td>
              <td>{requirement.trainingArea}</td>
              <td>{requirement.reqCategory}</td>
              <td>{requirement.institution}</td>
              <td>{requirement.duration}</td>
              <td>
                <Link to={`/edit/${requirement._id}`}>Edit</Link>
                <button onClick={() => handleDelete(requirement._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    </div>
   </div>
  );
}

export default AdminPanel;
