import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  value: string;
}

const initialState: DataState = {
  value: '',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      // action.payloadで受け取ったデータを、state.valueに格納
      state.value = action.payload;
    }
  }
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;