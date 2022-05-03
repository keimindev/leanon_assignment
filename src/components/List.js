import React from "react";

const List = (props) => {
  const { handleDelBtn, toDos } = props;
  return (
    <>
      {toDos.map((el, idx) => {
        return (
          <>
            <li key={el.id}>
              <span>{toDos.length - idx}</span>
              <p>{el.task}</p>
              <button onClick={() => handleDelBtn(el.task)}>Del</button>
            </li>
          </>
        );
      })}
    </>
  );
};

export default List;
