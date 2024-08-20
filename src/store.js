import { configureStore, createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = [];

// Redux Toolkit의 createSlice를 사용하여 리듀서와 액션을 정의
const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload.text, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
  },
});

// 액션 추출
export const { add, remove } = toDosSlice.actions;

export const addToDo = (text) => {
  return {
    type: add,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: remove,
    id,
  };
};

// 스토어 설정
const store = configureStore({
  reducer: toDosSlice.reducer,
});

export default store;
