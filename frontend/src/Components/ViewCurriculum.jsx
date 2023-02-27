import React from 'react'
import { useState } from 'react';
import './Viewadmin.css';


const ViewCurriculum = () => {
    
    var [newsdata, setdata] = useState([]);
    return (
        <div>

            <div>

                <div className="container-16">
                    <div className="navigation">
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
                                        <ion-icon name="people-outline"></ion-icon>
                                    </span>
                                    <span className="title">Admin Panel</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="clipboard-outline"></ion-icon>
                                    </span>
                                    <span className="title">Requirement Form</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="receipt-outline"></ion-icon>
                                    </span>
                                    <span className="title">Faculty List</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </span>
                                    <span className="title">View Curriculum</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="help-outline"></ion-icon>
                                    </span>
                                    <span class="title">Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="settings-outline"></ion-icon>
                                    </span>
                                    <span class="title">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="lock-closed-outline"></ion-icon>
                                    </span>
                                    <span class="title">Password</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="log-out-outline"></ion-icon>
                                    </span>
                                    <span class="title">Sign Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="main">
                        <div className="topbar">
                            <div className="toggle">
                                <ion-icon name="menu-outline"></ion-icon>
                            </div>


                            <div className="user">
                                <img src="" alt="" />
                            </div>
                        </div>





                        <div class="details">
                            <div class="recentOrders">
                                <div class="cardHeader">
                                    <h2>Curriculum </h2>

                                </div>

                               
<br />



<table><tbody>

                                        <tr>
                                            <td>Download Curriculum</td>
                                            <td> <a class="btn btn-filedownload" href="http://localhost:8080/files/63eef24f62e15cf8ce05a116" target="_blank" role="button">
                                                
                                                <span class="details">
                                                    <span class="filename">Download</span>
                                                   
                                                </span>
                                                <span class="downloadicon">
                                                    <span class="icon-cloud-download pull-right icon-3x"></span>
                                                </span>
                                            </a>   </td>

                                        </tr>




                                    </tbody>
                                </table><br />
                                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" class="approve">
  <a href="/add" className="btn btn-success">APPROVE</a>
    
                                {/* <button className="btn btn-success">REJECT</button> */}
                                 </div>

                                
                                

                               
                            </div>
                        </div>
                    </div>


                </div>







                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />




            </div>


        </div>
    )
}

export default ViewCurriculum