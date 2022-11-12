import { useState } from "react";
import "./App.css";

function App() {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr,setPassErr] = useState(false);
  const [confirmpasswordErr,setConfirmErr] = useState(false);

  function signUpHandle(e) {
    if(userErr || emailErr || passwordErr || confirmpasswordErr){
      alert('please fill all details')
    }
    else {
      alert('form submitted')
      signUpHandle.resetForm();
    }
    e.preventDefault();
  }
  function fullnameHandler(e) {
    let fullName = e.target.value;
    if (fullName.length < 2) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setName(fullName)
  }
  function emailHandler(e) {
    let email = e.target.value;
    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") >= 1 &&
      email.lastIndexOf(".") < email.length - 2
    ) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
    setEmail(email)
  }
  function passwordHandler(e) {
    var password = e.target.value;
    if (password.length==0) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(password)
  }
  function confirmpasswordHandler(e) {
    let confirmpassword = e.target.value;
    if (
      confirmpassword.length == 0
    ) {
      setConfirmErr(true);
    } else {
      setConfirmErr(false);
    }
    setConfirm(confirmpassword)
  }
  return (
    <div className="Container">
      <form onSubmit={signUpHandle}>
        <h1>Sign Up Form</h1>
        <hr />
        <input
          type="text"
          className="input-box"
          placeholder="Full Name"
          onChange={fullnameHandler}
        />
        {userErr ? <p className="error">User Not Valid</p> : ""}
        <input
          type="email"
          className="input-box"
          placeholder="Email"
          onChange={emailHandler}
        />
        {emailErr ? <p className="error">Email Not Valid</p> : ""}
        <input
          type="password"
          className="input-box"
          placeholder="Password"
          onChange={passwordHandler}
        />
         {passwordErr ? <p className="error">Please enter Password</p> : ""}
        <input
          type="password"
          className="input-box"
          placeholder="Confirm Password"
          onChange={confirmpasswordHandler}
        />
        {confirmpasswordErr ? <p className="error">Please Confirm Password</p> : ""}
        <br />
        <button type="submit" className="signup">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;
