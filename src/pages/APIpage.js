import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const APIpage = () => {
  //user list 페이지 숫자 상태입니다
  const [page, setPage] = useState("1");

  //user list page 전체에 관한 useState입니다
  const [list, setList] = useState("");

  //user list에 대한 useState입니다 (사람들 정보 담아두는 State)
  const [users, setUsers] = useState([]);

  //info 버튼을 눌렀을 때, 해당 user의 이름을 모달로 띄우기 위해서 state 관리를 따로 했습니다.
  const [info, setInfo] = useState("");

  //모달창을 열고, 닫기 위한 state 값입니다.
  const [showModal, setShowModal] = useState(false);

  //페이지 값을 받아서 userlist를 받아와 state를 업데이트 해줍니다.
  const getUserData = () => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        setList(res.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  //표 하단부분의 화살표 버튼입니다. 1,2페이지 두 개 뿐이라서 숫자 인자를 받게 했습니다.
  const clickBtn = (num) => {
    setPage(num);
  };

  //개개별로 info 버튼을 눌러서 해당 user의 이름을 띄울 수 있게 해주는 함수입니다. filter로 user list 중 해당하는 데이터를 찾아서 상태 업데이트 해줍니다.
  const getDetail = (email) => {
    let _info = users.filter((el) => el.email === email);
    setInfo(_info[0]);
    setShowModal(true);
  };

  //데이터를 받아오기 위한 것으로 page상태가 변할 때 마다 렌더링 될 수 있게 의존값에 page값을 넣었습니다.
  useEffect(() => {
    getUserData();
  }, [page]);

  return (
    <>
      <Backbtn>
        <Link to="/">
          <button>Back to</button>
        </Link>
      </Backbtn>
      <Wrap>
        <h1>User List</h1>
        <DataInfo>
          <p>
            page{" "}
            <span>
              {list.page}/{list.total_pages}
            </span>
          </p>
        </DataInfo>
        <UserTable>
          {users.map((item) => {
            return (
              <>
                <TableLine key={item.id}>
                  <img src={item.avatar} alt="avata" />
                  <div>{item.email}</div>
                  <button onClick={() => getDetail(item.email)}>Info</button>

                  {showModal && info?.email === item.email ? (
                    <>
                      <Modal>
                        <span>{item.first_name} </span>
                        <span>{item.last_name}</span>
                        <span>
                          <button onClick={() => setShowModal(false)}>
                            close
                          </button>
                        </span>
                      </Modal>
                    </>
                  ) : (
                    <></>
                  )}
                </TableLine>
              </>
            );
          })}

          <Btns>
            <button onClick={() => clickBtn("1")}>◀</button>
            <button onClick={() => clickBtn("2")}>▶</button>
          </Btns>
        </UserTable>
      </Wrap>
    </>
  );
};

export default APIpage;

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
  width: 700px;
  margin: 0 auto;
  padding-top: 50px;
  h1 {
    text-align: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    margin: 0 auto;
  }
`;

const DataInfo = styled.div`
  text-align: end;
`;
const UserTable = styled.div`
  width: 500px;
  margin: 50px auto;
  padding: 50px 50px;
  border: 1px solid #eee;
`;

const TableLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #eee;

  position: relative;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  button {
    padding: 15px 20px;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    background-color: #eee;

    &:hover {
      background-color: #ac73d2;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;

    img {
      margin: 20px 0;
    }

    button {
      margin: 30px 0;
    }
  }
`;

const Modal = styled.div`
  width: 80%;
  padding: 30px 50px;
  border-radius: 10px;
  color: #fff;
  background-color: #ac73d2;
  border: 1px solid #ac73d2;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  position: absolute;
  top: 25px;
  left: 10%;

  button {
    padding: 8px 10px;
    margin-left: 20px;

    &:hover {
      background-color: #fff;
    }
  }
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 20px 5px 5px 5px;
    display: flex;
    justify-content: center;
    background-color: #eee;
    border: 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #ac73d2;
    }
  }
`;
