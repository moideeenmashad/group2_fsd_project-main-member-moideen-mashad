import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: '',
  });
  const role = ['admin', 'user'];
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
      }),
    });
    const json = await response.json();
    console.log(json);
    console.log(json.status);
    if (json.status === 'success') {
      if (credentials.role === 'admin') {
        localStorage.setItem('token', json.token);
        navigate('/AdminRequirement');
        toast.success('login Successfully');
      } else {
        localStorage.setItem('token', json.token);
        navigate('/Card');
      }
    } else {
      toast.error('invalid credentials');
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid h-custom"
             style={{
                marginTop:"5%",
                     }}>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleSubmit}>
            

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                className="form-control form-control-lg"
                required
                placeholder="Enter a valid email address"
                style={{ backgroundColor: '#eaedf0' }}
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control form-control-lg"
                autoComplete="off"
                placeholder="Enter password"
                required
                style={{ backgroundColor: '#eaedf0' }}
              />
            </div>
            <div>
              <select
                className="form-select form-select-lg"
                required={true}
                id="role"
                name="role"
                value={credentials.role}
                onChange={onChange}
                style={{ backgroundColor: 'aliceblue', fontWeight: '500' }}
              >
                <option defaultValue>Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">User</option>
              </select>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check mb-0" style={{marginTop:"2%"}}>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                  </label>
                  </div>
                  <Link to="/Signup" className="link">
                    Create an Account?
                  </Link>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                  Login
                  </button>
                  </div>
                  </form>
                  </div>
                  </div>
                  </div>
                  );
                  };
                  
                  export default Signin;
                  
                  
                  
                  
