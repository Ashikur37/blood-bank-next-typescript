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
                  <li className="nav-item ">
                    <Link href={'/'} className="nav-link"> 
                    <a className="nav-link" >
                    Home
                    </a>
                    
                    </Link>
                   
                  </li>
                  {session ?
                  <>
                  <li className="nav-item ">
                  <Link href={'/dashboard'}>
                  <a className="nav-link" >Dashboard
                  </a>
                  </Link>
                  </li>
                  <li className="nav-item ">
                  <a href='#' className='nav-link ' onClick={() => signOut()}>
                    Logout
                  </a>
                  </li>
                  </>
                  :<li className="nav-item "><Link href={'/login'}><a className="nav-link" >Login</a></Link></li> }
                  
                 
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