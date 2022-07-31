import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../utils/axios';
import { getProviders, signIn } from "next-auth/react";
const Login: NextPage = ({ providers, redir }:any) => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const submitForm =async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    try{
      let res= await axios.post("/api/login",{
        email,
        password,
   });
      toast.success("Login Successfully");
      signIn(
        "credentials",
        {
          callbackUrl: redir,
        },
        {
          user: JSON.stringify({
            _id: res.data._id,
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
          }),
        }
      );
    }
    catch(err:any){
      console.log(err)
      toast.error(err.response.data.message);
    }
    
      
    }
  return (
<div className="container" style={{ marginTop: 10, marginBottom: 10 }}>
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
        <form method="POST" onSubmit={submitForm}>
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
                  id="email"
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
                htmlFor="password"
                className="col-md-4 col-form-label text-md-end"
              >
                Password
              </label>
              <div className="col-md-6">
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  id="password"
                  type="password"
                  className="form-control "
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 offset-md-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <a
                  className="btn btn-link"
                  href="https://blood.eibbuy.com/password/reset"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-8 offset-md-4">
                Dont have an account?{" "}
                <Link href={'/register'}>
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )}
  export async function getServerSideProps(context:any) {
    const providers = await getProviders();
    let redir = context.req.headers.referer || "/";
    return {
      props: { providers, redir },
    };
  }


export default Login