import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trucksCss from './TrucksList.module.css';
import TruckCard from '../TruckCard/TruckCard';
import { fetchTrucks, incrementOffset } from '../../redux/trucksSlice';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export const TrucksList = () => {
  const dispatch = useDispatch();
  const { filteredTrucks, loading } = useSelector(state => state.filters);
  const { currentOffset } = useSelector(state => state.trucks);

  useEffect(() => {
    if (filteredTrucks.length === 0) {
      dispatch(fetchTrucks(currentOffset));
    } else if (window.innerWidth <= 340) {
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      });
    }
  }, [dispatch, currentOffset, filteredTrucks.length]);

  const handleLoadMore = () => {
    dispatch(incrementOffset());
    dispatch(fetchTrucks(currentOffset + 4));
  };

  return (
    <>
      <ul className={trucksCss.list}>
        {filteredTrucks.map(filteredTrucks => (
          <li key={filteredTrucks.id} className={trucksCss.cardWrapper}>
            <TruckCard truck={filteredTrucks} />
          </li>
        ))}
      </ul>
      {loading && <Loader />}
      {!loading && filteredTrucks.length === 0 && (
        <p className={trucksCss.noResults}>No trucks match your filters.</p>
      )}
      {filteredTrucks.length !== 0 && !loading && (
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
