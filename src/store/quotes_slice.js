import { createSlice } from "@reduxjs/toolkit";

const listOfQuotes = [
  {
    text: "there's a crack in everything, that's how the light get's in",
    author: "Leonard Cohen",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    text: "Many of life's failures are people who did not realize how close they were to success when they gave up. ",
    author: "Thomas A. Edison",
  },
  {
    text: "Success is not final; failure is not fatal: It is the courage to continue that counts. ",
    author: "Winston S. Churchill",
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
];
const initialState = {
  value: listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)],
};
const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    nextQuote: (state) => {
      state.value =
        listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
    },
  },
});

export const { nextQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
