import { createSlice } from '@reduxjs/toolkit';

import trucksData from '../data/trucksData';

const filterInitialState = {
  allTrucks: [...trucksData],
  filters: {
    location: '',
    bodyType: '',
    equipment: [],
  },
  filteredTrucks: [...trucksData],
};

export const filterReducer = createSlice({
  name: 'trucksFilter',
  initialState: filterInitialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
    applyFilters: state => {
      const { location, bodyType, equipment } = state.filters;
      const filteredTrucks = state.allTrucks.filter(truck => {
        const matchesLocation = location
          ? truck.location?.toLowerCase().includes(location.toLowerCase())
          : true;
        const matchesBodyType = bodyType
          ? truck.form?.toLowerCase() === bodyType.toLowerCase()
          : true;
        const matchesEquipment = equipment.length
          ? equipment.every(item => truck[item])
          : true;

        return matchesLocation && matchesBodyType && matchesEquipment;
      });
      state.filteredTrucks = filteredTrucks;
    },
    resetFilters: state => {
      state.filters = { location: '', bodyType: '', equipment: [] };
    },
  },
});

export const { setFilters, applyFilters, resetFilters } = filterReducer.actions;

export default filterReducer.reducer;
