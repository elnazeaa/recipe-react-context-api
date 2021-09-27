import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import navLogo from "../images/navLogo.png";

const Navbar = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  const divHeight = useRef();
  const [linksHeight, setNavHeight] = useState(0);

  const handleCLick = () => {
    setNavToggle(!navToggle);
    console.log(navToggle);
    const heightFDiv = divHeight.current.getBoundingClientRect().height;
    setNavHeight(heightFDiv);
    console.log(heightFDiv);
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
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">categories</a>
            </li>
            <li>
              <a href="/projects">random</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--clr-white);
  box-shadow: var(--light-shadow);

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    margin-top: 4px;
    color: #565656;
  }

  .nav-toggle:hover {
    color: #565656;
    transform: rotate(90deg);
  }

  .logo {
    height: 40px;
  }

  .links a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
  }

  .links a:hover {
    background: var(--clr-primary-8);
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
    ${
      "" /* .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    } */
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #c5c5c5;
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
