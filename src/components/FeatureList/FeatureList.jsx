import { BsWind, BsCupHot, BsFuelPump, BsUiRadios } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { PiShowerLight } from 'react-icons/pi';
import { LuMicrowave } from 'react-icons/lu';
import { GasStoveIcon } from 'hugeicons-react';
import fridge from '../../img/fridge.svg';
import featureCss from './FeatureList.module.css';

const FeatureList = ({ truck }) => {
  if (!truck) {
    return null;
  }
  const featureItems = [
    { name: 'automatic', label: 'Automatic', icon: <BsWind /> },
    { name: 'AC', label: 'AC', icon: <BsWind /> },
    { name: 'petrol', label: 'Petrol', icon: <BsFuelPump /> },
    { name: 'kitchen', label: 'Kitchen', icon: <BsCupHot /> },
    { name: 'radio', label: 'Radio', icon: <BsUiRadios /> },
    { name: 'bathroom', label: 'Bathroom', icon: <PiShowerLight /> },
    {
      name: 'refrigerator',
      label: 'Refrigerator',
      icon: <img src={fridge} alt="Refrigerator" />,
    },
    { name: 'microwave', label: 'Microwave', icon: <LuMicrowave /> },
    { name: 'gas', label: 'Gas', icon: <GasStoveIcon size={20} /> },
    { name: 'water', label: 'Water', icon: <IoWaterOutline /> },
  ];

  return (
    <div className={featureCss.container}>
      {featureItems.map(feature =>
        truck[feature.name] && feature.icon ? (
          <div key={feature.name} className={featureCss.feature}>
            {feature.icon}
            <span className={featureCss.text}>{feature.label}</span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default FeatureList;
