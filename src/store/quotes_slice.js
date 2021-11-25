import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


var content = "press new quote button to start !";
var author = "";
const getRandomQuote = async () => {
  await axios
    .get("https://api.quotable.io/random")
    .then((response) => {
      content = response.data.content;
      console.log(content);
      author = response.data.author;
      console.log(author);
    })
    .catch((error) => {
      console.log(error);
    });
};
getRandomQuote();
const initialState = {
  content,
  author,
};
const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    nextQuote: (state) => {
      getRandomQuote();

      state.content = content;
      state.author = author;
    },
  },
});

export const { nextQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
