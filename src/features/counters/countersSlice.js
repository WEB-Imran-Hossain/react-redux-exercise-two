import { createSlice } from "@reduxjs/toolkit"; // Import createSlice from Redux Toolkit

// Initial state is an array of counter objects, each with an id and value
const initialState = [
  {
    id: 1,
    value: 6,
  },
  {
    id: 2,
    value: 10,
  },
];

const countersSlice = createSlice({
  name: "counters", // Define the slice name (similar your folder name)
  initialState, // Set the initial state
  reducers: {
    // Reducer to increment the value of a counter
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload); // Find the index of the counter with matching id
      state[counterIndex].value++; // Increment the value of the counter
    },
    // Reducer to decrement the value of a counter
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload); // Find the index of the counter with matching id
      state[counterIndex].value--; // Decrement the value of the counter
    },
  },
});

export default countersSlice.reducer; // Export the slice reducer
export const { increment, decrement } = countersSlice.actions; // Export the actions for use in components