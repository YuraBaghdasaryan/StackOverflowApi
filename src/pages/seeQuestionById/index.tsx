import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import {
  addComment,
  deleteQuestionById,
  getQuestinByIdThunk,
  likeCommentById,
  likeQuestionById,
} from "../../features/main/mainApi";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import { selectMain } from "../../features/main/mainSlice";
import { useSelector } from "react-redux";

const object = Yup.object({
  text: Yup.string().required("Text is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
});

export const SeeQuestionById: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { question } = useAppSelector((state) => state.main);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  console.log(question);

  useEffect(() => {
    if (params.id) {
      dispatch(getQuestinByIdThunk(+params.id));
    }
  }, [params]);

  const handleLikeQuestion = async () => {
    try {
      if (params.id) {
        const d = await dispatch(likeQuestionById(+params.id)).unwrap();
        console.log("likeQuestionById", d);
        dispatch(getQuestinByIdThunk(+params.id));
      }
    } catch {
      alert("error like question");
    }
  };

  const handLikeComnment = async (id: number) => {
    try {
      if (params.id) {
        const d = await dispatch(likeCommentById(id)).unwrap();
        console.log("likeCommentById", d);
        dispatch(getQuestinByIdThunk(+params.id));
      }
    } catch {
      alert("error like comment");
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      if (params.id) {
        const d = await dispatch(deleteQuestionById(+params.id)).unwrap();
        console.log("deleteQuestionById", d);
        navigate("/TopQuestions");
      }
    } catch (error) {
      alert("error");
    }
  };

  const handleSubmitComment = (values: { text: string; email: string }) => {
    dispatch(addComment({ ...values, questionId: params.id })).unwrap();
  };

  return (
    <div className="header">
      <div className="d4">
        {question ? (
          <div>
            <h1>SeeQuestById</h1>

            <h4>{question?.question}</h4>
            <div>
              <div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    handleDeleteQuestion();
                  }}
                >
                  Delete Question
                </button>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  onClick={() => {
                    handleLikeQuestion();
                  }}
                />
                <label>like count:{question?.likeCount}</label>
              </div>
            </div>
            <hr />
            {question?.comments?.map((elm: any) => (
              <div key={elm.id} style={{ border: "2px solid" }}>
                <p>{elm.text}</p>
                <div>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    onClick={() => {
                      handLikeComnment(elm.id);
                    }}
                  />
                  <label>like count:{elm?.likeCount}</label>
                </div>
              </div>
            ))}

            <Formik
              initialValues={{
                text: "",
                email: "",
              }}
              validationSchema={object}
              onSubmit={handleSubmitComment}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
              }) => (
                <form onSubmit={handleSubmit} className="form">
                  <div className="dinputs">
                    <input
                      type="text"
                      className="inp3"
                      placeholder="Text"
                      name="text"
                      value={values.text}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.text && touched.text && <p>{errors.text}</p>}
                    <input
                      type="text"
                      className="inp4"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p>{errors.email}</p>}
                    <button type="submit" className="btn btn-info">
                      Add Comment
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        ) : (
          <>not found</>
        )}
      </div>
    </div>
  );
});
