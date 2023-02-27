import React, { useState } from 'react';
import axios from 'axios';
// import Navbar from '../Headfooter/Navbar'

const Requirementform = () => {
  const [reqname,setReqname]=useState("");
     const [area,setArea]=useState("");
     const [institution,setInstitution]=useState("");
     const [catagory,setCatagory]=useState("");
     const [hours,setHours]=useState("");
     const [file,setFile]=useState("")
    
    
    const setData=(e)=>{
        e.preventDefault();
        const {value}=e.target;
        setReqname(value)
        setArea(value)
         setInstitution(value)
         setCatagory(value)
         setHours(value)
        
    }
       
    
    
    
    const setimgfile=(e)=>{
          console.log(e.target.files[0]);
          setFile(e.target.files[0]);
    }

    //addrequirement details

    const addRequirement=async(e)=>{
        e.preventDefault();
        var formData=new FormData()
        formData.append("photo",file) ;
        formData.append("reqname",reqname);
        formData.append("area",area);
        formData.append("institution",institution);
        formData.append("catagory",catagory);
        formData.append("hours",hours);

        const config={
            headers:{
                "Content-Type":"form-data"
            }
        }
        const res=await axios.post("http://localhost:8080/add",formData,config);
        console.log(res);
        if (res.statusText==="OK") {
            alert("Requirement successfully Added")
        }    
    }

    

    
                  
    

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
                                <span className="title">Requirement Form</span>
                            </a>
                        </li>


                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="receipt-outline"></ion-icon>
                                </span>
                                <span className="title">Faculties &nbsp;
                                    <ion-icon name="chevron-down-circle-outline" className="ddicon"></ion-icon></span>



                            </a>

                        </li>
                        <li>
                            <a href="/view">
                                <span className="icon">
                                    {/* <ion-icon name="receipt-outline"></ion-icon> */}
                                </span>
                                <span className="title">view response</span>

                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="receipt-outline"></ion-icon> */}
                                </span>
                                <span className="title">Faculty 2</span>

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
                                <span className="title">Present</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                                </span>
                                <span className="title">Past</span>
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
    <div  >
        
        
        {/* <Admin_navbar/> */}
          <div className="container fluid reqdiv ">
                <div className="row req-add bg-3 reqlist">
                    <section class="requirebox" >
                
{/*                 
                    <h1 class="adminreq">REQUIREMENT FORM</h1> */}
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       
                        <div className="col col-sm-8 req">
                            <form method="" className="form-horizontal" class="form-horizontal" >
                                <div className="form-group requirename">
                                    <label className="control-label col-sm-4">Name of Requirement:</label>
                                    <div className="col-sm-8">
                                       <input class="requirename" type="text" name="reqname" size="" placeholder='Requirement Name' onChange={(e)=>setReqname(e.target.value)}/>
                                    </div>
                                </div>
                                
                                <div className="form-group requirearea">
                                    <label className="control-label col-sm-4">Area where training is required:</label>
                                    <div className="col-sm-8">
                                        {/* <input type="text" name="area" placeholder=''/> */}
                                        <select name="area"  onChange={(e)=>setArea(e.target.value)}>
                                            <option>FSD</option>
                                             <option>ML-AI</option>
                                             <option>DSA</option>
                                             <option>RPA</option>
                                             <option>ST</option>
                                             <option>CSA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group1 requireinstitution">
                                    <label className="control-label col-sm-4">Institution/Corporate office from where the requirement came:</label>
                                    <div className="col-sm-8">
                                       <input class="reqname"type="text" size="" placeholder='Institution' name="institution"  onChange={(e)=>setInstitution(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group requirecatagory">
                                    <label className="control-label col-sm-4">Category of Requirement:</label>
                                    <div className="col-sm-8">
                                        {/* <input type="text" name="catagory" placeholder=''/> */}
                                       <select name="catagory"  onChange={(e)=>setCatagory(e.target.value)}>
                                            <option>RETAIL</option>
                                             <option>ACADEMIC</option>
                                             <option>CORPORATE</option>
                                             
                                            
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group requirehours">
                                    <label className="control-label col-sm-4">No of hours of training:</label>
                                    <div className="col-sm-8">
                                       <input type="text" placeholder='Hours ' size="30" name="hours"  onChange={(e)=>setHours(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group requireupload ">
                                    <label className="control-label col-sm-4">Upload file option for some references:</label>
                                    <div className="col-sm-8">
                                       <input type="file" placeholder=' '  name="photo" onChange={setimgfile}/>
                                    </div>
                                </div>
                               
                                <div className="form-group addbutton">
                                    <label className="control-label col-sm-4">           </label>
                                    <div className="col-sm-offset-4 col-sm-8 ">
                                        
                                    <button type="button"  onClick={addRequirement}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    </section>
                </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}


export default Requirementform;