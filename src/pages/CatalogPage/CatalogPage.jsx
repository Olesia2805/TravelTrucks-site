import { useDispatch, useSelector } from 'react-redux';
import catalogCss from './CatalogPage.module.css';
import FiltersCategory from '../../components/FiltersCategory/FiltersCategory';
import LocationInput from '../../components/LocationInput/LocationInput';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import TrucksList from '../../components/TrucksList/TrucksList';
import { applyFilters, resetFilters } from '../../redux/filterReducer';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(state => state.filters.filteredTrucks);

  const handleSearch = () => {
    dispatch(applyFilters());
    dispatch(resetFilters());
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
            {filteredTrucks.length === 0 ? (
              <p className={catalogCss.noResults}>
                No trucks match your filters.
              </p>
            ) : (
              <TrucksList trucks={filteredTrucks} />
            )}
          </div>
        </Section>
      </Container>
    </main>
  );
};

export default CatalogPage;
