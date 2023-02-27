import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('User');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
          confirmPassword,
          role,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setShowAlert(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setRole('User');
        window.location.reload();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
	<div className="container">
		<div className="row">
			<div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-6">
			<Form onSubmit={handleSubmit}>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          User created successfully!
        </Alert>
      )}
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Group>

	  <Form.Group controlId="confirmPassword">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control
    type="password"
    value={confirmPassword}
    onChange={(event) => setConfirmPassword(event.target.value)}
    required
  />
</Form.Group>

<Form.Group controlId="role">
  <Form.Label>Role</Form.Label>
  <Form.Control as="select" value={role} onChange={handleRoleChange}>
    <option value="User">User</option>
    <option value="Admin">Admin</option>
  </Form.Control>
</Form.Group>
<Link to="/Signin" className="link">
                    Already have an account?
                  </Link>
<br />
<Button variant="primary" type="submit">
  Submit
</Button>
{showAlert && (
  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
    User created successfully!
  </Alert>
)}
</Form>

			</div>
		</div>
	</div>
	
    
  )}

export default Signup;