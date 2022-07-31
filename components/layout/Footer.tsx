import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer id="contact" className="container-fluid">
    <div className="container">
      <div className="row content-ro">
        <div className="col-lg-4 col-md-12 footer-contact">
          <h2>Contact Informatins</h2>
          <div className="address-row">
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="detail">
              <p>
                46-29 Indra Street, Southernbank, Tigaione, Toranto, 3006 Canada
              </p>
            </div>
          </div>
          <div className="address-row">
            <div className="icon">
              <i className="far fa-envelope" />
            </div>
            <div className="detail">
              <p>
                sales@smarteyeapps.com <br /> support@smarteyeapps.com
              </p>
            </div>
          </div>
          <div className="address-row">
            <div className="icon">
              <i className="fas fa-phone" />
            </div>
            <div className="detail">
              <p>
                +91 9751791203 <br /> +91 9159669599
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 footer-links">
          <div className="row no-margin mt-2">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Pricing</li>
              <li>Gallery</li>
              <li>eatures</li>
            </ul>
          </div>
          <div className="row no-margin mt-1">
            <h2 className="m-t-2">More Products</h2>
            <ul>
              <li>Forum PHP Script</li>
              <li>Edu Smart</li>
              <li>Smart Event</li>
              <li>Smart School</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <p>
              Copyright ©{" "}
              <a href="https://www.smarteyeapps.com">Smarteyeapps.com</a> | All
              right reserved.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 socila-link">
            <ul>
              <li>
                <a>
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )

}