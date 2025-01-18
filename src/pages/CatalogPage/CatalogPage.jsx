import catalogCss from './CatalogPage.module.css';
import FiltersCategory from '../../components/FiltersCategory/FiltersCategory';
import LocationInput from '../../components/LocationInput/LocationInput';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import TrucksList from '../../components/TrucksList/TrucksList';

const CatalogPage = () => {
  return (
    <main>
      <Container>
        <Section className="catalog">
          <div className={catalogCss.filterBlock}>
            <LocationInput />
            <h4 className={catalogCss.filters}>Filters</h4>
            <FiltersCategory />
            <Button className="search">Search</Button>
          </div>
          <div className={catalogCss.resultsBlock}>
            <TrucksList />
          </div>
        </Section>
      </Container>
    </main>
  );
};

export default CatalogPage;
