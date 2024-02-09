export type Questions = {
  id: number;
  question: string;
  likeCount: number;
};

export type Comments={
    id:number
    text:string
    email:string
    likeCount:number
    questionId:number  
}

export type Category={
   id:number;
   name:string
}

