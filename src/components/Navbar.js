import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import navLogo from "../images/navLogo.png";
import { Link } from "react-router-dom";
import { ContexRandomMeal } from "../context/ContextRandomMeal";

const Navbar = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  const divHeight = useRef();
  const [linksHeight, setNavHeight] = useState(0);

  const handleCLick = () => {
    setNavToggle(!navToggle);
    const heightFDiv = divHeight.current.getBoundingClientRect().height;
    setNavHeight(heightFDiv);
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <img src={navLogo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={handleCLick}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          style={{ height: `${navToggle ? linksHeight + "px" : "0px"}` }}
        >
          <ul className="links" ref={divHeight}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/categories">categories</Link>
            </li>
            <li>
              <Link to="/random">random</Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: #cccbd1 !important;

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: #565656;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 4px;
    color: #565656;
  }

  .nav-toggle:hover {
    color: #565656;
  }

  .logo {
    height: 40px;
  }

  .links a {
    color: #565656;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
  }

  .links a:hover {
    background: #e65500;
    color: #e65500;
    padding-left: 1.5rem;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
    text-align: center;
    color: #565656;
  }

  .show-container {
    height: 10rem;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-around;
      ${"" /* background: #c5c5c5; */}
      padding: 1rem;
      box-shadow: 21px 0px 6px #a7a7a7;
      margin: 0 auto;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
  }
`;

export default Navbar;
