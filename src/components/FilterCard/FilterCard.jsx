import cardCss from './FilterCard.module.css';

const FilterCard = ({ label, Icon, isSelected, onClick, isMultipleChoice }) => {
  return (
    <div
      className={`${cardCss.card} ${isSelected ? cardCss.selected : ''}`}
      onClick={onClick}
      role={isMultipleChoice ? 'checkbox' : 'radio'}
    >
      <Icon className={cardCss.icon} />
      <span className={cardCss.text}>{label}</span>
    </div>
  );
};

export default FilterCard;
