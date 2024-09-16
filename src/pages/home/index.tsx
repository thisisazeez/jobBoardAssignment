import { Link } from "react-router-dom"
import { Navbar } from "../../components"

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="banner-job">
        <div className="banner-overlay" />
        <div className="container text-center">
          <h1 className="title">The Easiest Way to Get Your New Job</h1>
          <h3>We offer 12000 jobs vacation right now</h3>
          <div className="banner-form">
            <form action="#" className="clearfix">
              <input
                type="text"
                className="form-control"
                placeholder="Type your key word"
              />
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>{" "}
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">Location 1</a>
                  </li>
                  <li>
                    <a href="#">Location 2</a>
                  </li>
                  <li>
                    <a href="#">Location 3</a>
                  </li>
                </ul>
              </div>
              <button type="submit" className="btn btn-primary" value="Search">
                Search
              </button>
            </form>
          </div>
          <ul className="banner-socail list-inline">
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" title="Google Plus">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <i className="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page">
        <div className="container">
          <div className="section category-items job-category-items  text-center">
            <ul className="category-list">
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/1.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Accounting/Finance</span>
                  <span className="category-quantity">(1298)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/2.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/3.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Engineer/Architects</span>
                  <span className="category-quantity">(212)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/4.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Garments/Textile</span>
                  <span className="category-quantity">(972)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/5.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">HR/Org. Development</span>
                  <span className="category-quantity">(1298)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/6.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Design/Creative</span>
                  <span className="category-quantity">(76212)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/7.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Research/Consultancy</span>
                  <span className="category-quantity">(1298)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/8.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Medical/Pharma</span>
                  <span className="category-quantity">(76212)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/9.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Music &amp; Arts</span>
                  <span className="category-quantity">(212)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/10.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Marketing/Sales</span>
                  <span className="category-quantity">(1298)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/11.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Production/Operation</span>
                  <span className="category-quantity">(124)</span>
              </li>
              <li className="category-item">
                <Link to="/jobs">Job list</Link>
                  <div className="category-icon">
                    <img
                      src="images/icon/12.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Miscellaneous</span>
                  <span className="category-quantity">(972)</span>
              </li>
            </ul>
          </div>
          <div className="section latest-jobs-ads">
            <div className="section-title tab-manu">
              <h4>Latest Jobs</h4>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation">
                  <a href="#hot-jobs" data-toggle="tab">
                    Hot Jobs
                  </a>
                </li>
                <li role="presentation">
                  <a href="#recent-jobs" data-toggle="tab">
                    Recent Jobs
                  </a>
                </li>
                <li role="presentation">
                  <a className="active" href="#popular-jobs" data-toggle="tab">
                    Popular Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane fade in" id="hot-jobs">
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/3.png"
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
                        @ <a href="#">Volja Events &amp; Entertainment</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/1.png"
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
                        </a>{" "}
                        @ <a href="#">Dominos Pizza</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/2.png"
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
                        </a>{" "}
                        @ <a href="#">AOK Security</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/4.png"
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
                        </a>{" "}
                        @ <a href="#">Dropbox Inc</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade in"
                id="recent-jobs"
              >
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/2.png"
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
                        </a>{" "}
                        @ <a href="#">AOK Security</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/1.png"
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
                        </a>{" "}
                        @ <a href="#">Dominos Pizza</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/4.png"
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
                        </a>{" "}
                        @ <a href="#">Dropbox Inc</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/3.png"
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
                        @ <a href="#">Volja Events &amp; Entertainment</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className="tab-pane fade in active show"
                id="popular-jobs"
              >
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/1.png"
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
                        </a>{" "}
                        @ <a href="#">Dominos Pizza</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/2.png"
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
                        </a>{" "}
                        @ <a href="#">AOK Security</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/3.png"
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
                        @ <a href="#">Volja Events &amp; Entertainment</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-ad-item">
                  <div className="item-info">
                    <div className="item-image-box">
                      <div className="item-image">
                        <a href="job-details.html">
                          <img
                            src="images/job/4.png"
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
                        </a>{" "}
                        @ <a href="#">Dropbox Inc</a>
                      </span>
                      <div className="ad-meta">
                        <ul>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              />
                              San Francisco, CA, US{" "}
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
                    <div className="button">
                      <a href="#" className="btn btn-primary">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ad-section text-center">
            <a href="#">
              <img src="images/ads/3.jpg" alt="Image" className="img-fluid" />
            </a>
          </div>
          <div className="section workshop-traning">
            <div className="section-title">
              <h4>Workshop Traning</h4>
              <a href="#" className="btn btn-primary">
                See all
              </a>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="workshop">
                  <img
                    src="images/job/5.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>
                    <a href="#">Business Process Management Training</a>
                  </h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated">
                        <a href="#">7 Jan 10:10 pm </a>
                      </span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#">
                        <i className="fa fa-map-marker" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="workshop">
                  <img
                    src="images/job/6.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>
                    <a href="#">Employee Motivation and Engagement</a>
                  </h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated">
                        <a href="#">7 Jan 10:10 pm </a>
                      </span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#">
                        <i className="fa fa-map-marker" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section cta cta-two text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-jobs">
                    <img
                      src="images/icon/31.png"
                      alt="Icon"
                      className="img-fluid"
                    />
                  </div>
                  <h3>3,412</h3>
                  <h4>Live Jobs</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-company">
                    <img
                      src="images/icon/32.png"
                      alt="Icon"
                      className="img-fluid"
                    />
                  </div>
                  <h3>12,043</h3>
                  <h4>Total Company</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-candidate">
                    <img
                      src="images/icon/33.png"
                      alt="Icon"
                      className="img-fluid"
                    />
                  </div>
                  <h3>5,798,298</h3>
                  <h4>Total Candidate</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="download" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>Download on App Store</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <a href="#" className="download-app">
                <img
                  src="images/icon/16.png"
                  alt="Image"
                  className="img-fluid"
                />
                <span className="pull-left">
                  <span>available on</span>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="download-app">
                <img
                  src="images/icon/17.png"
                  alt="Image"
                  className="img-fluid"
                />
                <span className="pull-left">
                  <span>available on</span>
                  <strong>App Store</strong>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="#" className="download-app">
                <img
                  src="images/icon/18.png"
                  alt="Image"
                  className="img-fluid"
                />
                <span className="pull-left">
                  <span>available on</span>
                  <strong>Windows Store</strong>
                </span>
              </a>
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
              Copyright © <a href="#">Jobs</a> 2017. Developed by{" "}
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
