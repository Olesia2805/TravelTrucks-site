import { Link } from 'react-router-dom';
import cardCss from './DetailCard.module.css';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';

const DetailCard = ({ truck }) => {
  return (
    <>
      <div className={cardCss.header}>
        <h2 className={cardCss.name}>{truck.name}</h2>
        <div className={cardCss.additionInfo}>
          <p className={cardCss.review}>
            <FaStar fill="#ffc531" size="16" />{' '}
            <Link
              to={`/catalog/${truck.id}/reviews`}
              className={cardCss.linkReviews}
            >
              {truck.rating} ({truck.reviewCount} Reviews)
            </Link>
          </p>
          <p className={cardCss.location}>
            <BsMap size="16" /> {truck.location}
          </p>
        </div>
        <p className={cardCss.price}>€{truck.price}.00</p>
      </div>
      <div className={cardCss.images}>
        {truck.gallery.map((image, index) => (
          <img
            key={index}
            className={cardCss.img}
            src={image.original}
            alt={truck.name}
          />
        ))}
      </div>
      <p className={cardCss.description}>{truck.description}</p>
    </>
  );
};
export default DetailCard;
