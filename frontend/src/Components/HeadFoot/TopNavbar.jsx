import React from 'react'

const TopNavbar = () => {
  return (
    
    <div>

 {/* <TopNavbar/> */}

<div className="header">
        <div className="menu-bar">



          <nav className="navbar sticky-top navbar-expand-lg justify-content-center">
            <div className="container-fluid">
              <a className="navbar-brand" href="https://ictkerala.org/">
                <img src="./assets/ictlogofinal.png" width="300" alt="logo" />
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item" id="home">
                    <a className="nav-link" href="/">


                      {/* home icon  */}

                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                      </svg>



                      {/* <img src="./images/Homeicon.png" alt="" srcset="" width="55" height="55" /> */}
                    </a></li>


                  <li className="nav-item">
                    <a className="nav-link" href='/Signin'>

                      {/* Account Icon */}

                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                      </svg>

                      {/* <img src="./images/AccountLogo2-Recovered.png" alt="" srcset="" width="55" height="55" /> */}
                    </a>


                  </li>
                </ul>
              </div>
            </div>
          </nav>


        </div>
      </div>
    </div>
  )
}

export default TopNavbar