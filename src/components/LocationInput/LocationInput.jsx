// import { useDispatch, useSelector } from 'react-redux';
// import { setLocation, selectLocation } from '../../redux/locationSlice';
import { BsMap } from 'react-icons/bs';
import locationCss from './LocationInput.module.css';

const LocationInput = () => {
  // const dispatch = useDispatch();
  // const location = useSelector(selectLocation);

  // const handleChange = (event) => {
  //   dispatch(setLocation(event.target.value));
  // };

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
          // value={location}
          // onChange={handleChange}
          placeholder="City"
        />
        <BsMap size="20" className={locationCss.icon} />
      </div>
    </>
  );
};

export default LocationInput;
