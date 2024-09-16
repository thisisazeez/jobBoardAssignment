import { Link } from "react-router-dom";
import { Navbar } from "../../../components";

export default function JobListingPage() {
  return (
<div>
  <Navbar/>
  <section className="job-bg page job-list-page">
    <div className="container">
      <div className="breadcrumb-section">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Engineer/Architects</li>
        </ol>
        <h2 className="title">Software Engineer</h2>
      </div>
      <div className="banner-form banner-form-full job-list-form">
        <form action="#" className="clearfix">
          <div className="dropdown category-dropdown">
            <a data-toggle="dropdown" href="#">
              <span className="change-text">Job Category</span>
              <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu category-change">
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Software Engineer</a>
              </li>
              <li>
                <a href="#">Program Development</a>
              </li>
              <li>
                <a href="#">Project Manager</a>
              </li>
              <li>
                <a href="#">Graphics Designer</a>
              </li>
            </ul>
          </div>
          <div className="dropdown category-dropdown language-dropdown">
            <a data-toggle="dropdown" href="#">
              <span className="change-text">Job Location</span>
              <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu category-change language-change">
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
          <input
            type="text"
            className="form-control"
            placeholder="Type your key word"
          />
          <button type="submit" className="btn btn-primary" value="Search">
            Search
          </button>
        </form>
      </div>
      <div className="category-info">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="accordion">
              <div className="panel-group" id="tr-accordion">
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      data-toggle="collapse"
                      data-target="#accordion-one"
                      aria-expanded="true"
                      aria-controls="accordion-one"
                    >
                      Categories
                    </button>
                  </div>
                  <div
                    id="accordion-one"
                    className="collapse show"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <h5>
                        <a href="categories-main.html">
                          <i className="fa fa-caret-down" /> All Categories
                        </a>
                      </h5>
                      <a href="#">
                        <i className="icofont icofont-man-in-glasses" />
                        Engineer/Architects
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Software <span>(129)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Architecture <span>(8342)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            UI &amp; UX Designer <span>(782)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Telecommunication <span>(5247)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Civil Engineer <span>(634)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Chemical Engineer <span>(453)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Program Development <span>(7986)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Mechanical Engineer <span>(742)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Industrial Engineer <span>(149)</span>
                          </a>
                        </li>
                      </ul>
                      <div className="see-more">
                        <button type="button" className="show-more one">
                          <i
                            className="fa fa-plus-square-o"
                            aria-hidden="true"
                          />
                          See More
                        </button>
                        <ul className="more-category one">
                          <li>
                            <a href="#">
                              Fron end developer<span>(289)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Back end developer<span>(5402)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              IT Department Manager<span>(3829)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              QA Department Manager<span>(352)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#accordion-two"
                      aria-expanded="true"
                      aria-controls="accordion-two"
                    >
                      Date Posted
                    </button>
                  </div>
                  <div
                    id="accordion-two"
                    className="collapse"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <label htmlFor="today">
                        <input type="checkbox" name="today" id="today" />
                        Today
                      </label>
                      <label htmlFor="7-days">
                        <input type="checkbox" name="7-days" id="7-days" /> 7
                        days
                      </label>
                      <label htmlFor="30-days">
                        <input type="checkbox" name="30-days" id="30-days" />
                        30 days
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#accordion-three"
                      aria-expanded="true"
                      aria-controls="accordion-three"
                    >
                      Salary Range
                    </button>
                  </div>
                  <div
                    id="accordion-three"
                    className="collapse"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <div className="price-range">
                        <div className="price">
                          <span>
                            $100 - <strong>$700</strong>
                          </span>
                          <div className="dropdown category-dropdown pull-right">
                            <a data-toggle="dropdown" href="#">
                              <span className="change-text">USD</span>
                              <i className="fa fa-caret-square-o-down" />
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">USD</a>
                              </li>
                              <li>
                                <a href="#">AUD</a>
                              </li>
                              <li>
                                <a href="#">EUR</a>
                              </li>
                              <li>
                                <a href="#">GBP</a>
                              </li>
                              <li>
                                <a href="#">JPY</a>
                              </li>
                            </ul>
                          </div>
                          <input
                            type="text"
                            defaultValue=""
                            data-slider-min={0}
                            data-slider-max={700}
                            data-slider-step={5}
                            data-slider-value="[250,450]"
                            id="price"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#accordion-four"
                      aria-expanded="true"
                      aria-controls="accordion-four"
                    >
                      Employment Type
                    </button>
                  </div>
                  <div
                    id="accordion-four"
                    className="collapse"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <label htmlFor="full-time">
                        <input
                          type="checkbox"
                          name="full-time"
                          id="full-time"
                        />
                        Full Time
                      </label>
                      <label htmlFor="part-time">
                        <input
                          type="checkbox"
                          name="part-time"
                          id="part-time"
                        />
                        Part Time
                      </label>
                      <label htmlFor="contractor">
                        <input
                          type="checkbox"
                          name="contractor"
                          id="contractor"
                        />
                        Contractor
                      </label>
                      <label htmlFor="intern">
                        <input type="checkbox" name="intern" id="intern" />
                        Intern
                      </label>
                      <label htmlFor="seasonal">
                        <input type="checkbox" name="seasonal" id="seasonal" />
                        Seasonal / Temp
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#accordion-five"
                      aria-expanded="true"
                      aria-controls="accordion-five"
                    >
                      Experience Level
                    </button>
                  </div>
                  <div
                    id="accordion-five"
                    className="collapse"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <label htmlFor="training">
                        <input type="checkbox" name="training" id="training" />
                        Training
                      </label>
                      <label htmlFor="entry-level">
                        <input
                          type="checkbox"
                          name="entry-level"
                          id="entry-level"
                        />
                        Entry Level
                      </label>
                      <label htmlFor="mid-senior">
                        <input
                          type="checkbox"
                          name="mid-senior"
                          id="mid-senior"
                        />
                        Mid-Senior Level
                      </label>
                      <label htmlFor="top-level">
                        <input
                          type="checkbox"
                          name="top-level"
                          id="top-level"
                        />
                        Top Level
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#accordion-six"
                      aria-expanded="true"
                      aria-controls="accordion-six"
                    >
                      Company
                    </button>
                  </div>
                  <div
                    id="accordion-six"
                    className="collapse"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <input
                        type="text"
                        placeholder="Search Company"
                        className="form-control"
                      />
                      <label htmlFor="apple">
                        <input type="checkbox" name="apple" id="apple" />
                        Apple
                      </label>
                      <label htmlFor="dropbox">
                        <input type="checkbox" name="dropbox" id="dropbox" />
                        Dropbox
                      </label>
                      <label htmlFor="micromax">
                        <input type="checkbox" name="micromax" id="micromax" />
                        Micromax
                      </label>
                      <label htmlFor="nokia">
                        <input type="checkbox" name="nokia" id="nokia" />
                        Nokia
                      </label>
                      <label htmlFor="microsoft">
                        <input
                          type="checkbox"
                          name="microsoft"
                          id="microsoft"
                        />
                        Microsoft
                      </label>
                      <label htmlFor="samsung">
                        <input type="checkbox" name="samsung" id="samsung" />
                        Samsung
                      </label>
                      <div className="see-more">
                        <button type="button" className="show-more two">
                          <i
                            className="fa fa-plus-square-o"
                            aria-hidden="true"
                          />
                          See More
                        </button>
                        <div className="more-category two">
                          <label htmlFor="blackBerry">
                            <input
                              type="checkbox"
                              name="blackBerry"
                              id="blackBerry"
                            />
                            BlackBerry
                          </label>
                          <label htmlFor="motorola">
                            <input
                              type="checkbox"
                              name="motorola"
                              id="motorola"
                            />
                            Motorola
                          </label>
                          <label htmlFor="lenovo">
                            <input type="checkbox" name="lenovo" id="lenovo" />
                            Lenovo
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card panel-faq">
                  <div className="card-header">
                    <button
                      className="collapsed"
                      data-toggle="collapse"
                      data-target="#accordion-seven"
                      aria-expanded="true"
                      aria-controls="accordion-seven"
                    >
                      Location
                    </button>
                  </div>
                  <div
                    id="accordion-seven"
                    className="collapse"
                    data-parent="#tr-accordion"
                  >
                    <div className="panel-body">
                      <input
                        type="text"
                        placeholder="Search Location"
                        className="form-control"
                      />
                      <label htmlFor="angeles">
                        <input type="checkbox" name="angeles" id="angeles" />
                        Los Angeles, CA
                      </label>
                      <label htmlFor="kingdom">
                        <input type="checkbox" name="kingdom" id="kingdom" />
                        United Kingdom
                      </label>
                      <label htmlFor="states">
                        <input type="checkbox" name="states" id="states" />
                        United States
                      </label>
                      <label htmlFor="columbia">
                        <input type="checkbox" name="columbia" id="columbia" />
                        British Columbia
                      </label>
                      <label htmlFor="australia">
                        <input
                          type="checkbox"
                          name="australia"
                          id="australia"
                        />
                        Australia
                      </label>
                      <label htmlFor="germany">
                        <input type="checkbox" name="germany" id="germany" />
                        Germany
                      </label>
                      <div className="see-more">
                        <button type="button" className="show-more three">
                          <i
                            className="fa fa-plus-square-o"
                            aria-hidden="true"
                          />
                          See More
                        </button>
                        <div className="more-category three">
                          <label htmlFor="belgium">
                            <input
                              type="checkbox"
                              name="belgium"
                              id="belgium"
                            />
                            Belgium
                          </label>
                          <label htmlFor="brazil">
                            <input type="checkbox" name="brazil" id="brazil" />
                            Brazil
                          </label>
                          <label htmlFor="denmark">
                            <input
                              type="checkbox"
                              name="denmark"
                              id="denmark"
                            />
                            Denmark
                          </label>
                          <label htmlFor="indonesia">
                            <input
                              type="checkbox"
                              name="indonesia"
                              id="indonesia"
                            />
                            Indonesia
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-7">
            <div className="section job-list-item">
              <div className="featured-top clearfix">
                <h4>Showing 1-25 of 65,712 ads</h4>
                <div className="dropdown pull-right">
                  <div className="dropdown category-dropdown">
                    <h5>Sort by:</h5>
                    <a data-toggle="dropdown" href="#">
                      <span className="change-text">Most Relevant</span>
                      <i className="fa fa-caret-square-o-down" />
                    </a>
                    <ul className="dropdown-menu category-change">
                      <li>
                        <a href="#">Most Relevant</a>
                      </li>
                      <li>
                        <a href="#">Most Popular</a>
                      </li>
                    </ul>
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
                    <span className="title">
                      <Link to="/jobs/job-details">Project Manager</Link>
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
                      </ul>
                    </div>
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
                    <span className="title">
                      <Link to="/jobs/job-details">Graphics Designer</Link>
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
                      </ul>
                    </div>
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
                    <span className="title">
                      <Link to="/jobs/job-details">CTO</Link>
                      @<a href="#">Volja Events &amp; Entertainment</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/7.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Industrial Manager</Link>
                      @ <a href="#">Total Gas</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/8.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Software Engineer</Link>
                      @ <a href="#">Dell</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/9.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Human Resource Manager</Link>
                      @ <a href="#">Acrobat</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/10.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Program Development</Link>
                      @ <a href="#">Adidus</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ad-section text-center">
                <a href="#">
                  <img
                    src="images/ads/3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/11.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">CTO</Link>
                      @<a href="#">IBM</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/12.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Human Resource Manager</Link>
                      @ <a href="#">BP</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/13.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Industrial Manager</Link>
                      @ <a href="#">SaraLee</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/14.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Software Engineer</Link>
                      @ <a href="#">Daman</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/15.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Program Development</Link>
                      @ <a href="#">Helix</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/16.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">CTO</Link>
                      @<a href="#">Dutrigo</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/17.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Software Engineer</Link>
                      @ <a href="#">Costa Rica</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-ad-item">
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="job-details.html">
                        <img
                          src="images/job/18.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span className="title">
                      <Link to="/jobs/job-details">Program Development</Link>
                      @ <a href="#">HSBC</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <ul className="pagination">
                  <li>
                    <a href="#">
                      <i className="fa fa-chevron-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a>...</a>
                  </li>
                  <li>
                    <a href="#">10</a>
                  </li>
                  <li>
                    <a href="#">20</a>
                  </li>
                  <li>
                    <a href="#">30</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-chevron-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-none d-lg-block">
            <div className="advertisement text-center">
              <a href="#">
                <img src="images/ads/1.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="something-sell" className="clearfix parallax-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2 className="title">
            Add your resume and let your next job find you.
          </h2>
          <h4>
            Post your Resume for free on <a href="#">Jobs.com</a>
          </h4>
          <a href="post-resume.html" className="btn btn-primary">
            Add Your Resume
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

  )
}
