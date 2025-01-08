import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItem } from '../../api/item';

interface ItemState {
  value: {data: { message: string }} | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ItemState = {
  value: null,
  status: 'idle',
  error: null,
};

// Thunk to fetch data from API
export const itemFetch = createAsyncThunk('item/fetchItem', async () => {
  const data = await fetchItem();
  return data;
});

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(itemFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(itemFetch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;  // Example of setting the value from API
      })
      .addCase(itemFetch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default itemSlice.reducer;
