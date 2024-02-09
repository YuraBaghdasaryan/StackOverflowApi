import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  addComment,
  addQuestionByIdThunk,
  getCategoriesThunk,
  getQuestinsThunk,
  searchQuestionThunk,
} from "../../features/main/mainApi";
import { Link, useParams } from "react-router-dom";
import { selectMain } from "../../features/main/mainSlice";
import { Formik, FormikValues } from "formik";
import "./style.scss";
import * as Yup from "yup";

const object = Yup.object({
  text: Yup.string().required("Text is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("email is Required"),
});

export const TopQuestions: React.FC = React.memo(({}): JSX.Element => {
  const { questions } = useAppSelector(selectMain);
  console.log(questions);
  const paras = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuestinsThunk());
  }, []);

  const searchText = (e: any) => {
    dispatch(searchQuestionThunk(e.target.value));
  };

  return (
    <div className="header1">
      <div className="d2">
        <h1>Top-Question</h1>
        <input
          type="text"
          placeholder="Search Questions"
          className="inp2"
          onChange={searchText}
        />
        {questions?.map((elm: any) => {
          const countquens =
            elm.question.length > 30
              ? elm.question.substring(0, 30) + "..."
              : elm.question;
          return (
            <div key={elm.id} className="d3">
              <h1>{countquens}</h1>
              <Link to={"/seeQuestionById/" + elm.id}>See-Questions</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});
