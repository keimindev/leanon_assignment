## Assignment

- [react 개념](#React) 
- [To Do list](#To-Do-list)
- [API test](#API-test)

<br/>
<br/>
<br/>

# React 

자바스크립트 기반의 UI 라이브러리로 컴포넌트 단위로 구성하다보니 역할과 기능으로 따로 관리하기 용이하고 반복되는 부분은 재사용을 할 수도 있어서 효율적인 코드를 쓸 수 있고 생산성도 극대화 할 수 있습니다. 가상돔을 사용해서 렌더링하기 때문에 지속적으로 데이터 변화하는 대규모 어플리케이션 구축에 용이합니다. 리액트 컴포넌트에는 라이프 사이클이라는 것이 있는데, 컴포넌트가 DOM에 실행되고(마운트), 업데이트되고 마지막으로 제거되는(언마운트) 일련의 과정을 의미합니다. 클래스형 컴포넌트만 유의미했지만 지금은 함수형 컴포넌트에서도 react hook인 useState, useEffect 로 라이프사이클을 비슷하게 구현할 수 있습니다. 

리액트에서 말하는 상태 관리는 컴포넌트 간에 데이터를 공유하고 상호작용하는 방법, 동적으로 표현되는 데이터 관리를 말합니다. 컴포넌트간에 props가 전달되고, 컴포넌트 안에서 state로 동적인 데이터가 관리됩니다. 리액트는 단반향 데이터 흐름을 지향하는데, 상위 컴포넌트에서 하위 컴포넌트로 props를 내려주면서 관리했습니다. Flux라는 패턴이 나오고, 계속해서 상태가 복잡한 웹 어플리케이션이 생겨나면서 메소드 양이 많아지고 코드 가독성이 떨어진다는 단점이 있었습니다. 전역 상태 관리에 대한 필요성이 커지며 redux라는 전역상태 관리 라이브러리가 등장했습니다. 컴포넌트간의 상태들을 한 군데 모아놓고 한 곳에서 전역적으로 데이터를 보내는 방식입니다. 

<br/>
<br/>
<br/>



# To Do list
- React, styled-components
- form 과 list 컴포넌트를 두 개로 나눠서 구현했습니다.

<br/>

<p align="center" >
<img src="https://blog.kakaocdn.net/dn/bnOC7t/btrBcdwj7ij/BuUEg0TXZM5kMjKj760jqK/img.gif" alt="list" width="80%" >
</p>

<br/>
<br/>


# API test 
-- React, styled-components, Axios
- `get` method를 사용하여 user list 데이터를 가지고 왔습니다. 
- 두 페이지 모두 가지고 왔고, info 버튼을 누르면 해당 user의 이름을 확인할 수 있습니다. 
- 특정 모바일 사이즈로 넘어가면 레이아웃이 변경됩니다. 

<br/>
<p align="center" >
<img src="https://blog.kakaocdn.net/dn/bldLaA/btrBaQ2UfOo/FXebjjeKVE7OE78BQ6Cf51/img.gif" alt="list" width="80%" >
</p>

<br/>
<br/>
<br/>
<br/>



### 실행 방법

    npm install
    npm start
   

<br/>
<br/>
<br/>
<br/>

