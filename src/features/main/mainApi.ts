  import { createAsyncThunk } from "@reduxjs/toolkit";
  import { myAxios } from "../../app/store";

  export const getCategoriesThunk = createAsyncThunk(
    "get/categories",
    async () => {
      const { data } = await myAxios.get("/categories");
      return data.categories;
    }
  );

  export const getQuestinsThunk = createAsyncThunk("get/question", async () => {
    const { data } = await myAxios.get("/question");
    return data.questions;
  });
  export const getQuestinByIdThunk = createAsyncThunk
  ("get/question by id", 
  async (id:number) => {
    const { data } = await myAxios.get("/question/"+id);
    return data.question;
  });

  export const addQuestionByIdThunk = createAsyncThunk(
    "add questions",
    async (obj: any) => {
      const { data } = await myAxios.post("/question", obj);
      return data;
    }
  );

  export const searchQuestionThunk = createAsyncThunk(
    "search/question",
    async (text: string) => {
      const { data } = await myAxios.get("/question/search/" + text);
      return data.questions;
    }
  );

  export const getCategoriesByid = createAsyncThunk(
    "get categories",
    async (id: number) => {
      const { data } = await myAxios.get("/question" + id);
      return data;
    }
  );

  export const addComment = createAsyncThunk(
    "add comment", 
    async (obj: any) => {
    const { data } = await myAxios.post("/question/comment", obj);
    return data;
    
  });

  export const likeCommentById = createAsyncThunk(
    "like comment",
    async (id: number) => {
      const { data } = await myAxios.patch(`/question/comment/like/${id}`);
      return data 
    }
  );
  export const likeQuestionById = createAsyncThunk(
    "like question",
    async (id: number) => {
      const { data } = await myAxios.patch(`/question/like/${id}`);
      return data 
    }
  );

  export const deleteQuestionById=createAsyncThunk(
    'delete comment',
    async(id:number)=>{
      const {data}=await myAxios.delete("/question/"+id)
      return data
    }
  )


