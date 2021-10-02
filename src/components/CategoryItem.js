import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContextCategory } from "../context/ContextCategory";

const CategoryItem = ({ foodCategory }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    foodCategory;
  const { handleCategory } = useContext(ContextCategory);
  return (
    <Wrapper className="container">
      <div className="imgCont">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="content">
        <p className="title">{strCategory}</p>
        <p className="recepi">{strCategoryDescription.slice(0, 200)} ...</p>
        {/* <button
          onClick={() => {
            handleCategory(strCategory);
          }}
          className="detail"
        >
          <Link to={`/category/${strCategory}`}>Detail</Link>
        </button> */}
        <Link
          className="detail"
          to={`/category/${strCategory}`}
          onClick={() => {
            handleCategory(strCategory);
          }}
        >
          Detail
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 20.57rem;
  height: auto;
  background: #fff;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 4px;
  transition: 1s ease-in-out;

  :hover {
    border-top: 1px solid #e65500;
    margin-top: 1px;
  }

  .imgCont {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCont img {
    width: 20rem;
    height: auto;
    border-radius: 2px;
  }

  .content {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12rem;
  }

  .title {
    font-size: 1.3rem;
    color: #e65500;
    margin-bottom: 5px;
  }

  .detail {
    width: 6rem;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    font-size: 1rem;
    margin: 1rem 0 0 0;
    background: #e65500;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
  }
  .detail:focus {
    color: #565656;
  }
`;

export default CategoryItem;
