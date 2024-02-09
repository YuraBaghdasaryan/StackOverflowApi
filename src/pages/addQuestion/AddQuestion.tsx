import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectMain } from "../../features/main/mainSlice";
import {
  addQuestionByIdThunk,
  getCategoriesByid,
  getCategoriesThunk,
  getQuestinsThunk,
} from "../../features/main/mainApi";
import { Formik } from "formik";
import * as Yup from "yup";
import { RootState } from "../../app/store";
import { useParams } from "react-router-dom";
import "./style.scss";

const object = Yup.object({
  question: Yup.string(),
  categories: Yup.array(),
});
export const AddQuestion: React.FC = React.memo(({}): JSX.Element => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { categories } = useAppSelector((st: RootState) => st.main);
  console.log(categories);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

  return (
    <div className="div1">
      <h1>Add-Questions</h1>
      <div className="div2">
        <Formik
          initialValues={{
            question: "",
            categories: [],
          }}
          validationSchema={object}
          onSubmit={(values) => {
            console.log(values);

            dispatch(addQuestionByIdThunk({ ...values }))
              .unwrap()
              .then(console.log);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <div className="form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="question"
                  name="question"
                  value={values.question}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.question && touched.question && (
                  <p>{errors.question}</p>
                )}
                <select
                  name="categories"
                  value={values.categories}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  multiple
                >
                  {categories?.map((elm: any) => {
                    return (
                      <option key={elm.id} value={elm.id}>
                        {elm.name}
                      </option>
                    );
                  })}
                </select>
                <button type="submit" className="btn1">
                  Click
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
});
