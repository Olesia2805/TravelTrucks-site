import { useDispatch, useSelector } from 'react-redux';
import { BsMap } from 'react-icons/bs';
import locationCss from './LocationInput.module.css';
import { setFilters } from '../../redux/filterReducer';

const LocationInput = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters) || {};

  const handleChange = event => {
    console.log('Current filters:', filters);
    console.log('Updated location:', event.target.value);

    // Dispatch only the location change and preserve the other filter values
    dispatch(
      setFilters({
        ...filters, // Spread the current filters
        location: event.target.value, // Update only the location
      })
    );
  };

  return (
    <>
      <label htmlFor="location" className={locationCss.location}>
        Location
      </label>
      <div className={locationCss.inputWrapper}>
        <input
          className={locationCss.input}
          type="text"
          id="location"
          value={filters.location || ''} // Use filters.location here
          onChange={handleChange}
          placeholder="City"
        />
        <BsMap size="20" className={locationCss.icon} />
      </div>
    </>
  );
};

export default LocationInput;
