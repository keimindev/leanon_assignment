import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Wrap>
        {/* 과제 2번 문제로 이동합니다 */}
        <Link to="/todolist">
          <p>Go to To Do List</p>
        </Link>
        {/* 과제 3번 문제로 이동합니다 */}
        <Link to="/api">
          <p>Go to API Assignment</p>
        </Link>
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div`
  width: 50%;
  margin: 300px auto;
  text-align: center;

  p {
    padding: 20px 30px;
    margin: 20px 0;
    background-color: #ac73d2;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
   
  }
`;
