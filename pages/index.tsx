import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
<>

  {/* ################# Slider Starts Here#######################-*/}
  <div className="slider-detail">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <Image
         className="d-block w-100"
            src={require('../assets/images/slider/slide-02.jpg')}
            alt="First slide"
            />
          
          <div className="carousel-caption d-none d-md-block">
            <h5 className=" bounceInDown">Donate Blood &amp; Save a Life</h5>
            <p className=" bounceInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              justo neque, <br />
              aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu
              metus, mattis <br />
              sed sagittis at, sagittis quis neque. Praesent.
            </p>
            <div className=" vbh">
              <div className="btn btn-success  bounceInUp">
                {" "}
                Book Appointment{" "}
              </div>
              <div className="btn btn-success  bounceInUp"> Contact US </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <Image
         className="d-block w-100"
            src={require('../assets/images/slider/slide-03.jpg')}
            alt="Third slide"
            />
        
          <div className="carousel-caption vdg-cur d-none d-md-block">
            <h5 className=" bounceInDown">Donate Blood &amp; Save a Life</h5>
            <p className=" bounceInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              justo neque, <br />
              aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu
              metus, mattis <br />
              sed sagittis at, sagittis quis neque. Praesent.
            </p>
            <div className=" vbh">
              <div className="btn btn-danger  bounceInUp"> Donate Now </div>
              <div className="btn btn-danger  bounceInUp"> Contact US </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  {/**************** About Us Starts Here ****************/}
  <section id="about" className="contianer-fluid about-us">
    <div className="container">
      <div className="row session-title">
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 text">
          <h2>About Blood Doners</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            {" "}
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some formhumour, or
            randomised words which dont look even slightly believable. If you
            are going to use a passage. industrys standard dummy has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
          <p>
            Industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="col-md-6 image">
          <img src="assets/images/about.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  {/* ################# Gallery Start Here #######################-*/}
  <div id="gallery" className="gallery container-fluid">
    <div className="container">
      <div className="row session-title">
        <h2>Checkout Our Gallery</h2>
      </div>
      <div className="gallery-row row">
        <div id="gg-screen" />
        <div className="gg-box">
          <div className="gg-element">
            <img src="assets/images/gallery/g1.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g2.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g3.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g4.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g5.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g6.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g7.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g8.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g9.jpg" />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g10.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ################# Donation Process Start Here #######################-*/}
  <section id="process" className="donation-care">
    <div className="container">
      <div className="row session-title">
        <h2>Donation Process</h2>
        <p>
          The donation process from the time you arrive center until the time
          you leave
        </p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g1.jpg" alt="" />
            <h4>
              <b>1 - </b>Registration
            </h4>
            <p>
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm
              hedi corper turet suscipit lobortis
            </p>
            <button className="btn btn-sm btn-danger">
              Readmore <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g2.jpg" alt="" />
            <h4>
              <b>2 - </b>Seeing
            </h4>
            <p>
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm
              hedi corper turet suscipit lobortis
            </p>
            <button className="btn btn-sm btn-danger">
              Readmore <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g3.jpg" alt="" />
            <h4>
              <b>3 - </b>Donation
            </h4>
            <p>
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm
              hedi corper turet suscipit lobortis
            </p>
            <button className="btn btn-sm btn-danger">
              Readmore <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g4.jpg" alt="" />
            <h4>
              <b>4 - </b>Save Life
            </h4>
            <p>
              Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm
              hedi corper turet suscipit lobortis
            </p>
            <button className="btn btn-sm btn-danger">
              Readmore <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*################### Our Blog Starts Here #######################-*/}
  <div id="blog" className="blog-container contaienr-fluid">
    <div className="container">
      <div className="session-title row">
        <h2>Latest Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="row news-row">
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_01.jpg" alt="" />
            </div>
            <div className="detail">
              <h3>Latest News about Smarteye</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit
                consectetur adipiscing elit.{" "}
              </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_02.jpg" alt="" />
            </div>
            <div className="detail">
              <h3>Apple Launch its New Phone</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit
                consectetur adipiscing elit.{" "}
              </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_03.jpg" alt="" />
            </div>
            <div className="detail">
              <h3>About Windows 10 Update</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit
                consectetur adipiscing elit.{" "}
              </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_04.jpg" alt="" />
            </div>
            <div className="detail">
              <h3>Latest News about Smarteye</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit
                consectetur adipiscing elit.{" "}
              </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/**************** Footer  Starts Here *************** */}

</>

  )
}

export default Home
