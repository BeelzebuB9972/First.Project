import "./search_nav.css";
import CartCard from "../cart/cart_card";
import Wishlist from '../wishlist/wishlist'
import React from "react";
import { connect } from "react-redux";

function search({ state, dispatch }) {
  console.log("SearchNav",state, dispatch);
  const bodyKits = ["Honda", "Maruti Suzuki", "Volkswagon", "Chevorlet"];
  const carAudio = [
    "Amplifiers",
    "Speakers",
    "Subwoofers",
    "Audio Accessories",
  ];
  const wheels = ["TSW", "Sparco", "Niche Wheels"];
  const lights = ["Lightforce", "Headlights"];
  const suspension = ["MTS shock absorber", "MTS lower spings"];
  const mufflers = ["Bora"];
  const mechandise = ["MH T-Shirts", "MH Stickers"];
  const dropdown = (list) => {
    return list.map((elem, index, arr) => {
      if (index != arr.length - 1) {
        return (
          <React.Fragment>
            <a href="#" className="dropdown-item">
              <span className="font-en">{elem}</span>
            </a>
            <hr />
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <a href="#" className="dropdown-item">
              <span className="font-en">{elem}</span>
            </a>
          </React.Fragment>
        );
      }
    });
  };
  const cartCount = () => state.cart.length;
  const wishlistCount = () => state.wishlist.length;
  const compareCount = () => state.compare.length;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 offset-md-1 col-sm-4 offset-sm-4">
          <b>
            <a href="/product" className="logo_anchor">
              LOGO DESIGN
            </a>
          </b>
        </div>
        <div className="col-md-6 input-group">
          <input
            type="search"
            placeholder="Search for item"
            name="search"
            id="search"
            autoComplete="off"
            className="srch form-control"
          />
          <button id="search-btn" name="search-btn">
            <i className="fas fa-search "></i>
          </button>
        </div>
        <div className="col-md-3 order-md-3 offset-md-0 order-lg-3 col-sm-5 offset-sm-5 order-sm-4">
          <a
            href="#"
            className="sanchor"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Compare"
          >
            <span className="sicon fas fa-exchange-alt fa-2x"></span>
            <span className="slink badge badge-light">{compareCount()}</span>
          </a>
          <a
            href="#"
            className="sanchor"
            data-toggle="tooltip"
            data-toggle="modal"
            data-target="#Wishlist"
            data-placement="bottom"
            title="Wishlist"
          >
            <i className="sicon fa fa-heart fa-2x" aria-hidden="true"></i>
            <span className="slink2 badge badge-light">{wishlistCount()}</span>
          </a>
          <Wishlist wishlist={state.wishlist} dispatch={dispatch}/>
          <a className="sanchor drpdown">
            <i
              className="sicon fa fa-shopping-bag fa-2x"
              aria-hidden="true"
            ></i>
            <span className="slink3 badge badge-warning">{cartCount()}</span>
            <CartCard data={state.cart} dispatch={dispatch} />
          </a>
        </div>

        <div className="col-md-12 offset-md-0 order-md-4 col-sm-2 order-sm-3">
          <nav class="navbar navbar-expand-lg navbar-light bg-warning mq-bg">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mr-auto">
                <li className="nav-item">
                  <a href="/home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Accessories
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Car Audio
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(carAudio)}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Bodykits
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(bodyKits)}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Wheels
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(wheels)}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Lights
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(lights)}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Suspension
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(suspension)}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Mufflers
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(mufflers)}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Merchandise
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdown(mechandise)}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(search);
