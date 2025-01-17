import homeCss from './HomePage.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

const HomePage = () => {
  return (
    <main className={homeCss.home}>
      <Container>
        <h1 className={homeCss.header}>Campers of your dreams</h1>
        <p className={homeCss.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <Button className="home">View Now</Button>
        </Link>
      </Container>
    </main>
  );
};

export default HomePage;
