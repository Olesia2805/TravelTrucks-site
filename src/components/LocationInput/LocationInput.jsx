import { useDispatch, useSelector } from 'react-redux';
import { BsMap } from 'react-icons/bs';
import locationCss from './LocationInput.module.css';
import { setFilters } from '../../redux/filterReducer';

const LocationInput = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters) || {};

  const handleChange = event => {
    dispatch(
      setFilters({
        ...filters,
        location: event.target.value,
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
          value={filters.location || ''}
          onChange={handleChange}
          placeholder="City"
        />
        <BsMap size="20" className={locationCss.icon} />
      </div>
    </>
  );
};

export default LocationInput;
