import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  trucks: [],
  loading: false,
  error: null,
  currentOffset: 0,
  trucksPerBatch: 4,
};

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchTrucks',
  async offset => {
    const response = await axios.get(
      'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
    );
    return response.data.items.slice(offset, offset + 4);
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
        const uniqueTrucks = payload.filter(
          newTruck => !state.trucks.some(truck => truck.id === newTruck.id)
        );

        uniqueTrucks.forEach(truck => {
          truck.reviewCount = truck.reviews ? truck.reviews.length : 0;
        });

        state.trucks = [...state.trucks, ...uniqueTrucks];
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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
