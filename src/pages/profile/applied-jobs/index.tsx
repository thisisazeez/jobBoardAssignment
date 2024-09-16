import { Navbar } from "../../../components";
import { ProfileNavbar } from "../components";
import { Link } from "react-router-dom";

export default function AppliedJobsPage() {
  return (
    <div>
      <Navbar/>
      <section className="job-bg page ad-profile-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Applied Job</li>
            </ol>
            <h2 className="title">Applied Job</h2>
          </div>
          <ProfileNavbar/>
          <div className="section trending-ads latest-jobs-ads">
            <h4>Applied Jobs</h4>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/4.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Human Resource Manager
                    </a>
                    @ <a href="#">Dropbox Inc</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/2.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Graphics Designer
                    </a>
                    @ <a href="#">AOK Security</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/3.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      CTO
                    </a>{" "}
                    @<a href="#">Volja Events &amp; Entertainment</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Project Manager
                    </a>
                    @ <a href="#">Dominos Pizza</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/3.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      CTO
                    </a>{" "}
                    @<a href="#">Volja Events &amp; Entertainment</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/1.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Project Manager
                    </a>
                    @ <a href="#">Dominos Pizza</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="/images/job/4.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Human Resource Manager
                    </a>
                    @ <a href="#">Dropbox Inc</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          San Francisco, CA, US
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true" />
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true" />
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true" />
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="clearfix">
        <section className="footer-top clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h3>Quik Links</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">All Cities</a>
                    </li>
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                    <li>
                      <a href="#">Advertise With Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h3>How to sell fast</h3>
                  <ul>
                    <li>
                      <a href="#">How to sell fast</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Banner Advertising</a>
                    </li>
                    <li>
                      <a href="#">Promote your ad</a>
                    </li>
                    <li>
                      <a href="#">Jobs Delivers</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget social-widget">
                  <h3>Follow us on</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-official" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter-square" />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus-square" />
                        Google+
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" />
                        youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget news-letter">
                  <h3>Newsletter</h3>
                  <p>Jobs is Worldest leading Portal platform that brings!</p>
                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email id"
                    />
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-bottom clearfix text-center">
          <div className="container">
            <p>
              Copyright © <a href="#">Jobs</a> 2017. Developed by
              <a href="http://themeregion.com/">ThemeRegion</a>
            </p>
          </div>
        </div>
      </footer>
      <div className="style-chooser">
        <div className="style-chooser-inner">
          <a href="#" className="toggler">
            <i className="fa fa-cog fa-spin" />
          </a>
          <h4>Presets</h4>
          <ul className="preset-list clearfix">
            <li className="preset1 active" data-preset={1}>
              <a href="#" data-color="preset1" />
            </li>
            <li className="preset2" data-preset={2}>
              <a href="#" data-color="preset2" />
            </li>
            <li className="preset3" data-preset={3}>
              <a href="#" data-color="preset3" />
            </li>
            <li className="preset4" data-preset={4}>
              <a href="#" data-color="preset4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
