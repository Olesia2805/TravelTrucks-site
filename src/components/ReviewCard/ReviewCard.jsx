import reviewCss from './ReviewCard.module.css';
import { FaStar } from 'react-icons/fa6';

const ReviewCard = ({ review }) => {
  return (
    <>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <p className={reviewCss.text}>{review}</p>
      <FaStar />
    </>
  );
};

export default ReviewCard;
