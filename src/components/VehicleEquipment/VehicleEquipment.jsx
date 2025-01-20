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
  const filters = useSelector(state => state.filters.filters) || {}; // Select the filters object
  const equipment = filters.equipment || ''; // Get the current equipment from filters (default to empty array)

  const handleSelect = label => {
    const updatedEquipment = equipment.includes(label)
      ? equipment.filter(item => item !== label)
      : [...equipment, label];

    console.log('Current filters:', filters);
    console.log('Updated equipment:', updatedEquipment);

    dispatch(
      setFilters({
        ...filters, // Spread the current filters
        equipment: updatedEquipment, // Update the equipment field with the new array
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
          isMultipleChoice={true} // You can select multiple options
          isSelected={equipment.includes(value)} // Check if the equipment option is selected
          onClick={() => handleSelect(value)} // Dispatch action on click
        />
      ))}
    </div>
  );
};

export default VehicleEquipment;
