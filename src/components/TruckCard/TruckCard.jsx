import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favoritesSlice';
import cardCss from './TruckCard.module.css';
import Button from '../Button/Button';
import { BsSuitHeart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FeatureList from '../FeatureList/FeatureList';

const TruckCard = ({ truck }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites || []);
  const isFavorite = favorites.includes(truck.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(truck.id));
  };
  return (
    <>
      <img
        className={cardCss.img}
        src={truck.gallery && truck.gallery[0] ? truck.gallery[0].original : ''}
        alt={truck.name}
      />
      <div className={cardCss.info}>
        <div className={cardCss.header}>
          <h2 className={cardCss.name}>{truck.name}</h2>
          <p className={cardCss.price}>€{truck.price}.00</p>
          <div onClick={handleFavoriteClick} className={cardCss.heart}>
            {isFavorite ? <BsSuitHeart fill="red" /> : <BsSuitHeart />}
          </div>
        </div>
        <p className={cardCss.review}>
          <FaStar fill="#ffc531" size="16" />{' '}
          <Link
            to={`/catalog/${truck.id}/reviews`}
            className={cardCss.linkReviews}
          >
            {truck.rating} ({truck.reviews ? truck.reviews.length : 0} Reviews)
          </Link>
        </p>
        <p className={cardCss.location}>
          <BsMap size="16" /> {truck.location}
        </p>
        <p className={cardCss.description}>{truck.description}</p>
        {truck && <FeatureList truck={truck} />}
        <Link to={`/catalog/${truck.id}`}>
          <Button className="picture">Show more</Button>
        </Link>
      </div>
    </>
  );
};

export default TruckCard;
