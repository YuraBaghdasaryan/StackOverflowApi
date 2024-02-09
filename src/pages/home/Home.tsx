import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";


export const Home: React.FC = React.memo(({}): JSX.Element => {
  return (
    <div>
        <h1>Welcome to the Q&A Forum</h1>
        <img src="/image/8.png"  width={"950px"} height={"650px"} />
    </div>
  );
});
