import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBook(state, action) {
      state.books = action.payload;
    },
  },
});

export function getBook() {
  return async function fetchBooks(dispatch) {
    try {
      const res = await fetch(`http://localhost:8000/books`);
      const data = await res.json();
      dispatch({ type: "book/loaded", payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export default bookSlice.reducer;
