import {
  createSlice
} from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
  },
  reducers: {
    setCount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCount } = countSlice.actions;

export default countSlice.reducer;