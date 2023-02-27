import React, { useState } from "react";
import "./Card.css";
// import Footer from './HeadFoot/Footer';
import axios from "axios";
import { useEffect } from "react";

const Card = () => {
  const [comment, setcomment] = useState({
    content: "",
    file: "",
  });

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchdatafromapi();
  }, []);

  const fetchdatafromapi = () => {
    axios
      .get("http://localhost:8080/requirements")
      .then((response) => {
        console.log("details", response.data);
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const inputhandler = (event) => {
    const { name, value } = event.target;
    setcomment((previousstate) => ({
      ...previousstate,
      [name]: value,
    }));
  };

  const readvalues = () => {
    console.log(comment);
    axios.post("http://localhost:8080/comments", comment);

    axios
      .post("http://localhost:8080/upload/curriculum", comment)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
                            <a href="/AdminPanel">
                                <span className="icon">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </span>
                                <span className="title">View Curriculum</span>
                            </a>
                        </li>


                        <li>
                            <a href="/PastCurriculum">
                                <span className="icon">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                </span>
                                <span class="title">Past curriculums </span>
                            </a>
                        </li>

                    </ul>
                </div>

        <div className="main">
          {/* <div className="topbar"> */}
            {/* <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div> */}

            {/* <div className="user">
              <img src="" alt="" />
            </div>
          </div> */}

          <div class="details">
            <div class="recentOrders">
              <div class="cardHeader">
                {/* <h2>Requirement </h2> */}
              </div>

              {data.map((x, y) => {
                return (
                  <table>
                    <thead>
                      <tr>
                        <td>Name of Requirement</td>
                        <td>{x.ReqName}</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Area of Training</td>
                        <td>{x.trainingArea}</td>
                      </tr>
                      <tr>
                        <td>Name of Requirement Office</td>
                        <td>{x.institution}</td>
                      </tr>
                      <tr>
                        <td>Category of Training</td>
                        <td>{x.reqCategory}</td>
                      </tr>
                      <tr>
                        <td>Duration of Training</td>
                        <td>{x.duration}</td>
                      </tr>
                      <tr>
                        <td> Download Reference File</td>
                        <td>
                          {" "}
                          <a
                            class="btn btn-filedownload"
                            href="http://localhost:8080/refFiles/63eeed144aacc22ab3965701"
                            target="_blank"
                            role="button"
                          >
                            <span class="filetype filetype-pdf"></span>
                            <span class="details">
                              <span class="filename">Filename</span>
                              <span class="filesize">12Mb</span>
                            </span>
                            <span class="downloadicon">
                              <span class="icon-cloud-download pull-right icon-3x"></span>
                            </span>
                          </a>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}

              {/* <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div class="cardHeader">
                        <h2>Respond </h2>
                      </div>
                    </button>{" "}
                  </h2>

                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div>
                        Comment
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="2"
                          name="content"
                          value={comment.content}
                          onChange={inputhandler}
                        ></textarea>
                        <br />
                        <table>
                          <tbody>
                            <tr>
                              <td>Upload Curriculum</td>
                              <td>
                                {" "}
                                <div class="form-outline mb-4">
                                  <input
                                    type="file"
                                    id="uploadfile"
                                    class="form-control"
                                    placeholder="upload a file"
                                    name="file"
                                    value={comment.file}
                                    onChange={inputhandler}
                                  />
                                  <label htmlFor="" className="form-label">
                                    Select a file
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <div class="cardHeader">
                          <h2>
                            <button id="respond" onClick={readvalues}>
                              {" "}
                              Submit Response{" "}
                            </button>
                          </h2>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Card; */}
<div class="cardHeader">
                    <h2 id='res'>Respond </h2>
                    </div>
            {/* </button> </h2> */}


            {/* <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body"> */}

                <div>
                    Comment
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                        name='content'
                        value={comment.content}
                        onChange={inputhandler}></textarea>
                    <br />
                    {/* <table>
                        <tbody> */}
                            <tr>
                                <td>Upload Curriculum</td>
                                <td> <div class="form-outline mb-4">
                                    <input type="file" id="uploadfile" class="form-control" placeholder='upload a file'
                                        name='file'
                                        value={comment.file}
                                        onChange={inputhandler} />
                                  <td><label htmlFor="" className="form-label">Select a file</label></td>  
                                    
                                </div>



                                
                                </td>



                            </tr>
                        {/* </tbody>
                    </table>
                     */}

                    <div class="cardHeader">
                        <h2><button id='respond' onClick={readvalues}> Submit Response </button></h2> </div>

                </div>

            {/* </div> */}
            
            
            </div><div></div> 
             {/* <div> */}


    {/* </div>
</div>
<div> */}

{/* </div>
<div> */}

{/* </div>
</div>
</div> */}
 </div>
 </div>


 </div>







            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}




        </div>



    )
}

export default Card