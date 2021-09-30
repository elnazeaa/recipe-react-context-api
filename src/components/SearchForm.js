import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { ContextApi } from "../context/ContextApi";

const SearchForm = (props) => {
  let { handleInputQueryOnChange, mealName, getInputValAfterSubmit } =
    useContext(ContextApi);

  const [foodName, setFoodName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getInputValAfterSubmit(foodName);
  };

  const handleChange = (e) => {
    let name = e.target.value;
    handleInputQueryOnChange(name);
    setFoodName(name);
  };

  return (
    <Wrapper className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search Meals...."
            onChange={handleChange}
            value={mealName}
          />
          <div className="line"></div>
          <button>
            <BiSearchAlt />
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .formContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 1rem auto;
    width: 16rem;
  }
  .formContainer input {
    width: 15rem;
    padding: 10px 5px;
    border: none;
    border-bottom: 3px solid #565656;
    font-size: 20px;
    outline: none;
    color: #565656;
    transition: all 1s ease-in-out;
    background: whitesmoke;
  }
  .formContainer .line {
    content: "";
    position: absolute;
    width: 0;
    background-color: #e65500;
    height: 3px;
    left: 0;
    transition: all 1s ease-in-out;
  }
  input:focus + .line {
    width: 100%;
  }
  .formContainer button {
    font-size: 1.8rem;
    background: transparent;
    border: none;
    outline: none;
    text-align: center;
    position: absolute;
    right: 10px;
    color: #565656;
    cursor: pointer;
  }
`;

export default SearchForm;
