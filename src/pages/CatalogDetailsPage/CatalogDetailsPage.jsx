import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchTruckDetails } from '../../redux/trucksSlice';
import DetailCard from '../../components/DetailCard/DetailCard';
import Loader from '../../components/Loader/Loader';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import detailsCss from './CatalogDetailsPage.module.css';
import BookingForm from '../../components/BookingForm/BookingForm';

const CatalogDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { truck, loading, error } = useSelector(state => state.trucks);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckDetails(id));
    }
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error)
    return (
      <p className={detailsCss.error}>
        Error fetching truck details: {error.message}
      </p>
    );
  if (!truck) return <p className={detailsCss.error}>No truck found.</p>;

  return (
    <main>
      <Container>
        <Section>
          <DetailCard truck={truck} />
          <ul className={detailsCss.additionalInfo}>
            <li>
              <NavLink
                to="feature"
                className={({ isActive }) =>
                  `${detailsCss.item} ${isActive ? 'active' : ''}`
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  `${detailsCss.item} ${isActive ? 'active' : ''}`
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <svg
            width="1312"
            height="2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1h1312" stroke="#DADDE1" />
          </svg>
          <Outlet />
          <BookingForm />
        </Section>
      </Container>
    </main>
  );
};

export default CatalogDetailsPage;
