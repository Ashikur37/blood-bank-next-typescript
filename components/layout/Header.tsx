import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
type Props = {}

export default function Header({}: Props) {
  const { data: session } = useSession();
  
  return (
    <header className="continer-fluid ">
    <div className="header-top">
      <div className="container">
        <div className="row col-det">
          <div className="col-lg-6 d-none d-lg-block">
            <ul className="ulleft">
              <li>
                <i className="far fa-envelope" />
                sales@smarteyeapps.com
                <span>|</span>
              </li>
              <li>
                <i className="far fa-clock" />
                Service Time : 12:AM
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12">
            <ul className="ulright">
              <li>
                <i className="fas fa-user" />
                {session ?
                  <>
                  <Link href={'/dashboard'}>Dashboard</Link>
                  <button className='btn btn-link' onClick={() => signOut()}>
                  Logout
                  </button>
                  </>
                  : <Link href={'/login'}>Login</Link>}
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="menu-jk" className="header-bottom">
      <div className="container">
        <div className="row nav-row">
          <div className="col-md-3 logo">
            <Image
            src={require('../../assets/images/logo.jpg')}
            alt="logo"
            />
          </div>
          <div className="col-md-9 nav-col">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#process">
                      Process
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact US
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}