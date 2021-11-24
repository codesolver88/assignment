import React, { useState } from "react";
import data from "../db.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [credential, setCredential] = useState({ uname: "", pass: "" });
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (credential.uname === data.name && credential.pass === data.password) {
      setError(false);
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };
  const onChangeHandler = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="login-form">
        <form>
          <div className="avatar">
            <i className="material-icons">&#xE7FF;</i>
          </div>
          <h4 className="modal-title">Login to Your Account</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              name="uname"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="pass"
              onChange={onChangeHandler}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block btn-lg"
            value="Login"
            onClick={submitHandler}
          />
          {error ? (
            <span style={{ color: "red", marginLeft: 30 + "%" }}>
              Not a avlid credential
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}
