import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  allTrucks: [],
  filters: {
    location: '',
    bodyType: '',
    equipment: [],
  },
  filteredTrucks: [],
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
    setAllTrucks: (state, { payload }) => {
      state.allTrucks = payload;
      state.filteredTrucks = payload;
    },
  },
});

export const { setFilters, applyFilters, resetFilters, setAllTrucks } =
  filterReducer.actions;

export default filterReducer.reducer;
