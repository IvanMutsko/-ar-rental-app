import { useState, useEffect } from 'react';
import { fetchAPI } from '../../api/api';
import { CardsList } from '../../components/CardsList/CardsList';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { Container, LoadButton } from './CatalogPage.styled';

export default function CatalogPage() {
  const [catalog, setCatalog] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [filterValues, setFilterValues] = useState({});

  const fetchCatalog = async () => {
    try {
      const fetchedCars = await fetchAPI();
      setCatalog(fetchedCars);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  useEffect(() => {
    const filteredCatalog = catalog.filter(item => {
      return (
        (filterValues.make === '' ||
          item.make.toLocaleLowerCase() === filterValues.make) &&
        (filterValues.rentalPrice === 0 ||
          parseInt(item.rentalPrice.replace(/\D/g, ''), 10) <=
            filterValues.rentalPrice) &&
        (filterValues.minMileage === 0 ||
          item.mileage >= filterValues.minMileage) &&
        (filterValues.maxMileage === 0 ||
          item.mileage <= filterValues.maxMileage)
      );
    });
    setCatalog(filteredCatalog);
  }, [filterValues]);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 8);
  };

  return (
    <Container>
      <FilterBar filterValues={setFilterValues} />
      <CardsList catalog={catalog.slice(0, visibleItems)} />
      <LoadButton type="button" onClick={loadMoreItems}>
        Load more
      </LoadButton>
    </Container>
  );
}
