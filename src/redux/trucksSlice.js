import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import trucksData from '../data/trucksData';

const initialState = {
  trucks: [],
  loading: false,
  error: null,
  currentOffset: 0,
  trucksPerBatch: 4,
};

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchTrucks',
  async (offset, { rejectWithValue }) => {
    try {
      const response = trucksData;
      return response.slice(offset, offset + 4);
      // const response = await axios.get(
      //   'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
      // );
      // return response.data.items.slice(offset, offset + 4);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTruckDetails = createAsyncThunk(
  'trucks/fetchTruckDetails',
  async id => {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
    );
    return response.data;
  }
);

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    incrementOffset: state => {
      state.currentOffset += state.trucksPerBatch;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, { payload }) => {
        state.loading = false;
        const newTrucks = payload.filter(
          truck => !state.trucks.some(t => t.id === truck.id)
        );

        state.trucks = [...state.trucks, ...newTrucks];
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchTruckDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTruckDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.truck = payload;
        state.truck.reviewCount = payload.reviews ? payload.reviews.length : 0;
      })
      .addCase(fetchTruckDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { incrementOffset } = trucksSlice.actions;

export default trucksSlice.reducer;
