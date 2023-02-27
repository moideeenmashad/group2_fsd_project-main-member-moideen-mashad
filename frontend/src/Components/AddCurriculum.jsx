import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const AddCurriculum = () => {
  const [formData, setFormData] = useState({
    ReqName: "",
    trainingArea: "",
    reqCategory: "",
    institution: "",
    duration: "",
  });

  const [file, setFile] = useState(null);

  const { ReqName, trainingArea, reqCategory, institution, duration } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/curriculum/add", formData);
      console.log(res.data);
      alert("Data upload completed successfully.");
      setFormData({
        ReqName: "",
        trainingArea: "",
        reqCategory: "",
        institution: "",
        duration: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8080/upload/curriculum", formData);
      console.log(res.data);
      alert("File upload completed successfully.");
      setFile(null);
    } catch (err) {
      console.log(err);
    }
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
                                <span className="title">Final curriculum</span>
                            </a>
                        </li>





                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="receipt-outline"></ion-icon> */}
                                </span>
                                <span className="title">Download</span>

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

                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                                </span>
                                {/* <span className="title">Present</span> */}
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                                </span>
                                {/* <span className="title">Past</span> */}
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
                                {/* <h2>Requirement Form</h2> */}
                                {/* <a href="#" class="btn">View more</a> */}
                            </div>
                            <br /><br />
                            {/* <div className='card'> */}
                            <div className="col-xl-12"></div>
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="ReqName">
          <Form.Label>Requirement Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Requirement Name"
            name="ReqName"
            value={ReqName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="trainingArea">
          <Form.Label>Training Area</Form.Label>
          <Form.Control
            as="select"
            name="trainingArea"
            value={trainingArea}
            onChange={handleChange}
            required
          >
            <option value="">Select Training Area</option>
            <option value="FSD">FSD</option>
            <option value="ML-AI">ML-AI</option>
            <option value="DSA">DSA</option>
            <option value="RPA">RPA</option>
            <option value="ST">ST</option>
            <option value="CSA">CSA</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="reqCategory">
          <Form.Label>Requirement Category</Form.Label>
          <Form.Control
            as="select"
            name="reqCategory"
            value={reqCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Requirement Category</option>
            <option value="Retail">Retail</option>
            <option value="Academic">Academic</option>
            <option value="Corporate">Corporate</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="institution">
          <Form.Label>Institution</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Institution"
            name="institution"
            value={institution}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration
          </Form.Label>
          <Form.Control
type="number"
placeholder="Enter Duration"
name="duration"
value={duration}
onChange={handleChange}
required
/>
</Form.Group>
<Form.Group controlId="file">
      <Form.Label>Upload File (Optional)</Form.Label>
      <Form.Control
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</Container>
</div>
    </div>
    </div>
    </div>
   </div>
);
};

export default AddCurriculum;