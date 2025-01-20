import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/filterReducer';
import FilterCard from '../FilterCard/FilterCard';
import { BsWind, BsDiagram3, BsCupHot, BsDisplay } from 'react-icons/bs';
import { PiShowerLight } from 'react-icons/pi';
import equipmentCss from './VehicleEquipment.module.css';

const options = [
  { Icon: BsWind, label: 'AC', value: 'AC' },
  { Icon: BsDiagram3, label: 'Automatic', value: 'automatic' },
  { Icon: BsCupHot, label: 'Kitchen', value: 'kitchen' },
  { Icon: BsDisplay, label: 'TV', value: 'TV' },
  { Icon: PiShowerLight, label: 'Bathroom', value: 'bathroom' },
];

const VehicleEquipment = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters) || {};
  const equipment = filters.equipment || '';

  const handleSelect = label => {
    const updatedEquipment = equipment.includes(label)
      ? equipment.filter(item => item !== label)
      : [...equipment, label];

    dispatch(
      setFilters({
        ...filters,
        equipment: updatedEquipment,
      })
    );
  };

  return (
    <div className={equipmentCss.typeList}>
      {options.map(({ label, value, Icon }) => (
        <FilterCard
          key={label}
          Icon={Icon}
          label={label}
          isMultipleChoice={true}
          isSelected={equipment.includes(value)}
          onClick={() => handleSelect(value)}
        />
      ))}
    </div>
  );
};

export default VehicleEquipment;
