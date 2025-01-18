import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trucksCss from './TrucksList.module.css';
import TruckCard from '../TruckCard/TruckCard';
import { fetchTrucks, incrementOffset } from '../../redux/trucksSlice';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export const TrucksList = () => {
  const dispatch = useDispatch();
  const { trucks, loading, currentOffset } = useSelector(state => state.trucks);

  useEffect(() => {
    if (trucks.length === 0) {
      dispatch(fetchTrucks(currentOffset));
    }
  }, [dispatch, currentOffset, trucks.length]);

  const handleLoadMore = () => {
    const newOffset = currentOffset + 4;
    dispatch(incrementOffset());
    dispatch(fetchTrucks(newOffset));
  };

  return (
    <>
      <ul className={trucksCss.list}>
        {trucks.map(truck => (
          <li key={truck.id} className={trucksCss.cardWrapper}>
            <TruckCard truck={truck} />
          </li>
        ))}
      </ul>
      {loading && <Loader />}
      {!loading && trucks.length === 0 && (
        <p className={trucksCss.error}>No trucks available.</p>
      )}
      {trucks.length < 23 && trucks.length !== 0 && !loading && (
        <div className={trucksCss.buttonContainer}>
          <Button className="loadMore" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default TrucksList;
