import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/filterReducer';
import FilterCard from '../FilterCard/FilterCard';
import { BsGrid1X2, BsGrid, BsGrid3X3Gap } from 'react-icons/bs';
import typeCss from './VehicleType.module.css';

const options = [
  { Icon: BsGrid1X2, label: 'Van', value: 'panelTruck' },
  { Icon: BsGrid, label: 'Fully Integrated', value: 'fullyIntegrated' },
  { Icon: BsGrid3X3Gap, label: 'Alcove', value: 'alcove' },
];

const VehicleType = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters) || {};
  const bodyType = filters.bodyType || '';

  const handleSelect = value => {
    const updatedBodyType = bodyType === value ? '' : value;

    dispatch(
      setFilters({
        ...filters,
        bodyType: updatedBodyType,
      })
    );
  };

  return (
    <div className={typeCss.typeList}>
      {options.map(({ label, value, Icon }) => (
        <FilterCard
          key={label}
          Icon={Icon}
          label={label}
          isMultipleChoice={false}
          isSelected={bodyType === value}
          onClick={() => handleSelect(value)}
        />
      ))}
    </div>
  );
};

export default VehicleType;
