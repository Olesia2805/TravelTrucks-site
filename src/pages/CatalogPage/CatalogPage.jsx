import { useDispatch, useSelector } from 'react-redux';
import catalogCss from './CatalogPage.module.css';
import FiltersCategory from '../../components/FiltersCategory/FiltersCategory';
import LocationInput from '../../components/LocationInput/LocationInput';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import TrucksList from '../../components/TrucksList/TrucksList';
import { applyFilters } from '../../redux/filterReducer';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { location, bodyType, equipment } = useSelector(
    state => state.filters.filters
  );
  const filteredTrucks = useSelector(state => state.filters.filteredTrucks);

  const handleSearch = () => {
    if (!location && !bodyType && (!equipment || equipment.length === 0)) {
      alert('Please select at least one filter.');
      return;
    }
    dispatch(applyFilters());
  };

  return (
    <main>
      <Container>
        <Section className="catalog">
          <div className={catalogCss.filterBlock}>
            <LocationInput />
            <h4 className={catalogCss.filters}>Filters</h4>
            <FiltersCategory />
            <Button className="search" onClick={handleSearch}>
              Search
            </Button>
          </div>
          <div className={catalogCss.resultsBlock}>
            <TrucksList trucks={filteredTrucks} />
          </div>
        </Section>
      </Container>
    </main>
  );
};

export default CatalogPage;
