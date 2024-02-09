import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getCategoriesThunk } from "./features/main/mainApi";
import { RootState } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./component/Menu";
import { MyRouter } from "./router/MyRouter";

function App() {

  return <div className="App">
  <BrowserRouter>
  <Menu/>
  <MyRouter/>
  </BrowserRouter>
  
</div>;
}

export default App;
