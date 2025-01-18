import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import filterCss from './FiltersCategory.module.css';

const FiltersCategory = () => {
  return (
    <>
      <h3 className={filterCss.name}>Vehicle equipment</h3>
      <svg
        className={filterCss.line}
        height="2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1h360" stroke="var(--gray-light)" />
      </svg>
      <VehicleEquipment />
      <h3 className={filterCss.name}>Vehicle type</h3>
      <svg
        className={filterCss.line}
        height="2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1h360" stroke="var(--gray-light)" />
      </svg>
      <VehicleType />
    </>
  );
};

export default FiltersCategory;
