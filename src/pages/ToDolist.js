import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddForm from "../components/AddForm";
import List from "../components/List";

const ToDolist = () => {
  //task input state
  const [task, setTask] = useState("");

  //to do list state
  const [toDos, setToDos] = useState([]);

  //input form에 들어가는 task입니다
  const addTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  //하나의 task를 todo list에 더하기 위한 함수입니다.
  const addList = () => {
    //task 앞에 순번을 표기하기 위해 만들었으나, 순번으로 사용하지 않고 key prop으로 사용했습니다.
    let id = toDos.length + 1;
    if (toDos.length > 0) {
      id = toDos.length + 1;
    }

    //to do list에 필요한 내용입니다.
    let todo = { id: id, task: task };

    // 새로운 task 가 생성되면 새로운 todolist를 생성해서 기존에 있던 toDos에 새로운 todo를 더해줍니다.
    let newToDo = [todo, ...toDos];

    //to do list state에 업데이트해줍니다.
    setToDos(newToDo);
  };

  //새로운 task를 추가해주는 submit 함수입니다.
  const onSubmit = (e) => {
    e.preventDefault();
    //task input이 빈 값일 때는 이벤트가 일어나지 않게 합니다. task가 리스트에 추가된 이후엔 input는 제거합니다.
    if (task.length > 0) {
      addList(task);
      setTask("");
    }
  };

  //task 삭제하는 함수입니다
  //삭제버튼을 클릭하면 해당 task를 인자로 받아서 filter로 toDos리스트에서 같은 task를 걸러내고 새 리스트를 업데이트합니다.
  const handleDelBtn = (item) => {
    let newlist = toDos.filter((el) => {
      return el.task !== item;
    });
    setToDos(newlist);
  };

  return (
    <>
      <Backbtn>
        <Link to="/">
          <button>Back to</button>
        </Link>
      </Backbtn>
      <Wrap>
        <h1>To Do List</h1>
        {/* task 추가 form */}
        <AddForm onSubmit={onSubmit} addTask={addTask} task={task} />
        <Border></Border>
        <ListBox>
          <ul>
            {/* 생성된 to do List를 map 메소드를 사용하여 반복문으로 돌려 줍니다 */}
            <List handleDelBtn={handleDelBtn} toDos={toDos} />
          </ul>
        </ListBox>
      </Wrap>
    </>
  );
};

export default ToDolist;

const Backbtn = styled.div`
  width: 100px;
  margin: 50px auto;

  button {
    width: 80px;
    height: 30px;
    border: 0;
    background-color: #ac73d2;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Wrap = styled.div`
  width: 600px;
  border: 1px solid #eee;
  margin: 50px auto;
  padding-top: 50px;
  text-align: center;
`;



const Border = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ac73d2;
`;

const ListBox = styled.div`
  padding: 30px 30px;
  ul {
    width: 100%;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      margin-bottom: 5px;

      span {
        width: 30px;
        text-align: center;
      }

      button {
        padding: 3px 15px;
        margin-bottom: 5px;
        cursor: pointer;
      }
    }
  }
`;
