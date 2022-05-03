import React from "react";
import styled from "styled-components";

const AddForm = (props) => {
  const { onSubmit, addTask, task } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputBox>
          <input
            type="text"
            placeholder="please input your task"
            onChange={addTask}
            value={task}
          />
          <button type="submit">ADD</button>
        </InputBox>
      </form>
    </div>
  );
};

export default AddForm;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;

  input {
    width: 70%;
    height: 40px;
    line-height: 40px;
    outline: 0;
    border: 0;
    border-bottom: 2px solid #ac73d2;
    margin-right: 10px;
    padding-left: 10px;
  }

  button {
    padding: 5px 15px;
    cursor: pointer;
  }
`;
