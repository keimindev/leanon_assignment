import { Route, Routes } from "react-router-dom";
import "./App.css";
import APIpage from "./pages/APIpage";
import Home from "./pages/Home";
import ToDolist from "./pages/ToDolist";
import { ThemeProvider } from "styled-components";
import theme from "./utils.js/util";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        {/* 메인 페이지입니다 */}
        <Route path="/" element={<Home/>} />
        {/* to do list 페이지입니다 */}
        <Route path="/todolist" element={<ToDolist/>} />
        {/* API 활용 페이지입니다 */}
        <Route path="/api" element={<APIpage/>} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
