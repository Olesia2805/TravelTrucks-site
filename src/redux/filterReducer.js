import { createSlice } from '@reduxjs/toolkit';

import trucksData from '../data/trucksData';

// Additional filtering functionality
const filterInitialState = {
  allTrucks: [...trucksData], // Keep the full dataset
  filters: {
    location: '',
    bodyType: '',
    equipment: [],
  },
  filteredTrucks: [...trucksData], // Initialize with all trucks
};

export const filterReducer = createSlice({
  name: 'trucksFilter',
  initialState: filterInitialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload; // Update filter criteria
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
      state.filteredTrucks = filteredTrucks; // Filtered results
      console.log('Filtered trucks:', filteredTrucks); // Log filtered trucks for debugging
    },
    resetFilters: state => {
      state.filters = { location: '', bodyType: '', equipment: [] };
      state.filteredTrucks = [...state.allTrucks]; // Reset to all trucks
    },
  },
});

export const { setFilters, applyFilters, resetFilters } = filterReducer.actions;

export default filterReducer.reducer;
