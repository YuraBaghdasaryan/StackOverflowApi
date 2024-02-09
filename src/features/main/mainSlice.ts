import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  addQuestionByIdThunk,
  deleteQuestionById,
  getCategoriesThunk,
  getQuestinByIdThunk,
  getQuestinsThunk,
  likeCommentById,
  searchQuestionThunk,
} from "./mainApi";
import { RootState } from "../../app/store";
import { stat } from "fs";

const initialState: {
  questions: any;
  question: any;
  categories: { id: number; name: string }[];
  comments: {
    id: number;
    text: string;
    email: string;
    likeCount: number;
    questionId: number;
  }[];
} = {
  questions: [],
  question: {},
  categories: [],
  comments: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    build
      .addCase(getQuestinsThunk.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(searchQuestionThunk.fulfilled, (state, action) => {
        state.questions = action.payload;
      }).addCase(getQuestinByIdThunk.fulfilled, (state, action) => {
        state.question = action.payload;
      })
  },
});

export const selectMain = (state: RootState) => state.main;

export default mainSlice.reducer;
