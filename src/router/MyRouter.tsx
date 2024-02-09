import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { TopQuestions } from "../pages/topQuestion/TopQuestions";
import { AddQuestion } from "../pages/addQuestion/AddQuestion";
import { SeeQuestionById } from "../pages/seeQuestionById";

export const MyRouter: React.FC = React.memo(() => {
  const router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/TopQuestions", element: <TopQuestions /> },
    { path: "/AddQuestion", element: <AddQuestion /> },
     {path:"seeQuestionById/:id",element:<SeeQuestionById/>},
  ]);
  return router;
});
