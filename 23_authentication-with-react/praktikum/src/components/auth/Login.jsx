import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
  Alert,
} from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function submitLoginForm(e) {
    e.preventDefault();
    // Debugging
    // console.log("Form submitted");
    // console.log("Username:", username);
    // console.log("Password:", password);

    const dummy = {
      username: "Aurel Admin",
      password: "pass123",
    };

    if (username === dummy.username && password === dummy.password) {
      localStorage.setItem("isAuthenticated", true);
      console.log("isAuthenticated:", localStorage.getItem("isAuthenticated"));
      navigate("/");
    } if (username.trim() === "") {
      setErrorMessage("Username cannot be empty!!!");
    } if (password.trim() === "") {
      setErrorMessage("Password cannot be empty!!!");
    } if (password.trim() === "" && username.trim() === "") {
      setErrorMessage("Username and Password cannot be empty!!! Please fill both fields");
    } 
    if (username !== dummy.username && password !== dummy.password) {
      setErrorMessage("Wrong Username or Password");
    }
  }

  return (
    <React.Fragment>
      <Container className="my-5">
        <h2 className="fw-normal mb-5">Authentication</h2>
        <Row>
          <Col md={{ span: 6 }}>
            <Form id="loginForm" onSubmit={submitLoginForm}>
              {errorMessage && ( 
                <Alert variant="danger">{errorMessage}</Alert>
              )}
              <FormGroup className="mb-3">
                <FormLabel htmlFor="login-username">Username</FormLabel>
                <input
                  type="text"
                  className={`form-control ${
                    errorMessage ? "is-invalid" : username ? "is-valid" : ""
                  }`}
                  id="login-username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor="login-password">Password</FormLabel>
                <input
                  type="password"
                  className={`form-control ${
                    errorMessage ? "is-invalid" : password ? "is-valid" : ""
                  }`}
                  id="login-password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <Button
                type="submit"
                className="btn-success mt-2"
                id="login-btn"
                onClick={submitLoginForm}
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Login;
