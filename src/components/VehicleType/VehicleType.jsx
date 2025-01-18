// import { useDispatch, useSelector } from 'react-redux';
// import { setType } from '../../redux/filterSlice';
import FilterCard from '../FilterCard/FilterCard';
import { BsGrid1X2, BsGrid, BsGrid3X3Gap } from 'react-icons/bs';
import typeCss from './VehicleType.module.css';

const options = [
  { Icon: BsGrid1X2, label: 'Van' },
  { Icon: BsGrid, label: 'Fully Integrated' },
  { Icon: BsGrid3X3Gap, label: 'Alcove' },
];

const VehicleType = () => {
  //   const dispatch = useDispatch();
  //   const selectedBodyType = useSelector(state => state.filters.type);

  //   const handleTypeSelect = value => {
  //     dispatch(setType(value));
  //   };

  return (
    <div className={typeCss.typeList}>
      {options.map(({ label, Icon }) => (
        <FilterCard
          key={label}
          Icon={Icon}
          label={label}
          isMultipleChoice={false}
          //   isSelected={selectedBodyType === label}
          //   onClick={() => handleTypeSelect(label)}
        />
      ))}
    </div>
  );
};

export default VehicleType;
