import { NextPage } from "next";
import { useState } from "react";
const { API_URL } = process.env;
const Register:NextPage=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [bloodGroup,setBloodGroup]=useState("");

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
       
        event.preventDefault();
        // axios.post()
        alert(API_URL);
        
      }
    
    return(<div className="container" style={{ marginTop: 10, marginBottom: 10 }}>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Register</div>
          <div className="card-body">
            <form method="POST" onSubmit={submitForm}>
              
              <div className="row mb-3">
                <label
                  htmlFor="name"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Name
                </label>
                <div className="col-md-6">
                  <input
                  onChange={(e)=>setName(e.target.value)}
                    type="text"
                    className="form-control "
                    defaultValue=""
                    required
                    autoComplete="name"
                    
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="email"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Email Address
                </label>
                <div className="col-md-6">
                  <input
                  onChange={(e)=>setEmail(e.target.value)}
                  
                    type="email"
                    className="form-control "
                    name="email"
                    defaultValue=""
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="phone"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Phone Number
                </label>
                <div className="col-md-6">
                  <input
                  onChange={(e)=>setPhone(e.target.value)}
                   
                    type="text"
                    className="form-control "
                    name="phone"
                    defaultValue=""
                    autoComplete="phone"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="blood_group"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Blood Group
                </label>
                <div className="col-md-6">
                  <select
                    className="form-control"
                  onChange={(e)=>setBloodGroup(e.target.value)}

                    name="blood_group"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="password"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Password
                </label>
                <div className="col-md-6">
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                  
                    type="password"
                    className="form-control "
                    name="password"
                    required
                    autoComplete="new-password"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="password-confirm"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Confirm Password
                </label>
                <div className="col-md-6">
                  <input
                  onChange={(e)=>setConfirmPassword(e.target.value)}
             
                    type="password"
                    className="form-control"
                    name="password_confirmation"
                    required
                    autoComplete="new-password"
                  />
                </div>
              </div>
              <div className="row mb-0">
                <div className="col-md-6 offset-md-4">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register;