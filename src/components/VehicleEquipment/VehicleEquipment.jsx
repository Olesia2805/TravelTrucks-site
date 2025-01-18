import FilterCard from '../FilterCard/FilterCard';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleEquipment } from '../../redux/equipmentSlice';
import equipmentCss from './VehicleEquipment.module.css';
import { BsWind, BsDiagram3, BsCupHot, BsDisplay } from 'react-icons/bs';
import { PiShowerLight } from 'react-icons/pi';

const options = [
  { Icon: BsWind, label: 'AC' },
  { Icon: BsDiagram3, label: 'Automatic' },
  { Icon: BsCupHot, label: 'Kitchen' },
  { Icon: BsDisplay, label: 'TV' },
  { Icon: PiShowerLight, label: 'Bathroom' },
];

const VehicleEquipment = () => {
  //  const dispatch = useDispatch();
  //  const selectedEquipment = useSelector(
  //    state => state.equipment.selectedItems
  //  );

  //  const handleSelect = label => {
  //    dispatch(toggleEquipment(label));
  //  };

  return (
    <div className={equipmentCss.typeList}>
      {options.map(({ label, Icon }) => (
        <FilterCard
          key={label}
          Icon={Icon}
          label={label}
          isMultipleChoice={true}
          // isSelected={selectedEquipment.includes(value)}
          // onClick={handleSelect}
        />
      ))}
    </div>
  );
};

export default VehicleEquipment;
