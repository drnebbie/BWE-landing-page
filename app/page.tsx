import Script from 'next/script'
import React from 'react'


const home = () => {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Beyond Web Expectation</title>
        <meta name="deScription" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Beyond Web Expectation Coming Soon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/android-chrome-192x192.png"
        />
        {/* Place favicon.ico in the root directory */}
        {/* ========================= CSS here ========================= */}
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.0.min.css" />
        <link rel="stylesheet" href="assets/css/lineicons.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
        {/* ========================= main start ========================= */}
        <main className="main-06">
          {/* header start  */}
          <div className="header header-06">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <a href="" className="logo">
                    {" "}
                    <img src="assets/img/transparant logo.png" alt="logo" />
                  </a>
                </div>
                <div className="col-md-8">
                  <div className="header-right text-right">
                    <a href="mailto:mr.b.nhacundela@gmail.com">
                      Say hello! mr.b.nhacundela@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header end  */}
          {/* ========================= main-wrapper start ========================= */}
          <div className="main-wrapper demo-06">
            {/* hero-area start  */}
            <div className="hero-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    {/* heading start  */}
                    <div className="heading">
                      <h1 className="text-white wow fadeInUp" data-wow-delay=".2s">
                        We Are <br /> Coming Soon
                      </h1>
                    </div>
                    {/* heading end  */}
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    {/* countdown start  */}
                    <div
                      className="wow fadeInRight"
                      data-wow-delay=".4s"
                      data-countdown="2024/07/28"
                    />
                    {/* countdown end  */}
                  </div>
                  <div className="col-xl-5 col-lg-5">
                    {/* desc strat  */}
                    <p className="wow fadeInLeft" data-wow-delay=".4s">
                      We're strong believers that the best solutions come from
                      gathering new insights and pushing conventional boundaries.
                    </p>
                    {/* desc end  */}
                  </div>
                </div>
              </div>
            </div>
            {/* hero-area end  */}
            {/* team-area start  */}
            <div className="team-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9">
                    {/* section-title start  */}
                    <div className="section-title">
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">
                        Our Real Hero
                      </h1>
                      <h2 className="wow fadeInUp" data-wow-delay=".4s">
                        Every month, amounts of Projects{" "}
                        <br className="d-none d-lg-block" /> handover by this genius
                        team.
                      </h2>
                    </div>
                    {/* section-title end  */}
                  </div>
                </div>
                {/* team-wrapper start  */}
                <div className="team-wrapper">
                  {/* team-item start  */}
                  <div className="team-item wow fadeInUp" data-wow-delay=".2s">
                    <div className="team-img">
                      <img
                        style={{ height: 371 }}
                        src="assets/img/pxArt.png"
                        alt="a photo of Ben"
                      />
                      <ul className="social-links">
                        <li>
                          <a href="https://x.com/bennhacundela">
                            <i className="lni lni-twitter-filled" />
                          </a>
                        </li>
                        <li>
                          <a
                            style={{ width: 20, height: 12 }}
                            href="https://www.upwork.com/freelancers/benn23"
                          >
                            <img src="/assets/img/upwork.svg" />
                          </a>
                        </li>
                        {/* <li><a href="#"><i class="lni lni-instagram-original"></i></a></li> */}
                        <li>
                          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                            <i className="lni lni-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-info">
                      <h4>Ben Nhacundela</h4>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                  {/* team-item end  */}
                  {/* team-item start  */}
                  <div className="team-item wow fadeInUp" data-wow-delay=".6s">
                    <div className="team-img">
                      <img
                        style={{ height: 371 }}
                        src="assets/img/nigelpixel.png"
                        alt=""
                      />
                      <ul className="social-links">
                        <li>
                          <a href="#">
                            <i className="lni lni-facebook-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-twitter-filled" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-instagram-original" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="lni lni-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="team-info">
                      <h4>Nigel Xeno</h4>
                      <p>UX/UI Designer |Animator</p>
                    </div>
                  </div>
                  {/* team-item end  */}
                </div>
                {/* team-wrapper end  */}
              </div>
            </div>{" "}
            {/* end container  */}
            {/* team-area end  */}
          </div>
          {/* ========================= main-wrapper end ========================= */}
          {/* footer start  */}
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5">
                  <div className="credit wow fadeInRight" data-wow-delay=".4s">
                    <p>
                      Designed by <span>Nigel</span> and Developed by <span>Ben</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer end  */}
        </main>
        {/* ========================= main end ========================= */}
        {/* ========================= JS here ========================= */}

        <Script src="assets/js/vendor/modernizr-3.5.0.min.js"></Script>
        <Script src="assets/js/vendor/jquery-3.5.1.min.js"></Script>
        <Script src="assets/js/popper.min.js"></Script>
        <Script src="assets/js/bootstrap-4.5.0.min.js"></Script>
        <Script src="assets/js/countdown.js"></Script>
        <Script src="assets/js/wow.min.js"></Script>
        <Script src="assets/js/main.js"></Script>
      </>

    </div>

  )
}

export default home

