import { useState, useEffect } from 'react';
import { fetchAPI } from '../../api/api';
import { CardsList } from '../../components/CardsList/CardsList';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { Container, LoadButton } from './CatalogPage.styled';

export default function CatalogPage() {
  const [originalCatalog, setOriginalCatalog] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [filterValues, setFilterValues] = useState({});

  const fetchCatalog = async () => {
    try {
      const fetchedCars = await fetchAPI();
      setCatalog(fetchedCars);
      setOriginalCatalog(fetchedCars);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  const filter = () => {
    let filteredArray = [...originalCatalog];

    if (filterValues.make !== '') {
      filteredArray = filteredArray.filter(
        item => item.make.toLowerCase() === filterValues.make.toLowerCase()
      );
    }
    if (filterValues.rentalPrice !== 0) {
      filteredArray = filteredArray.filter(
        item =>
          parseInt(item.rentalPrice.replace(/\D/g, ''), 10) <=
          filterValues.rentalPrice
      );
    }
    if (filterValues.minMileage !== 0) {
      filteredArray = filteredArray.filter(
        item => item.mileage >= filterValues.minMileage
      );
    }
    if (filterValues.maxMileage !== 0) {
      filteredArray = filteredArray.filter(
        item => item.mileage <= filterValues.maxMileage
      );
    }

    setCatalog(filteredArray);
    setVisibleItems(8);
  };

  useEffect(() => {
    filter();
  }, [filterValues]);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 8);
  };

  return (
    <Container>
      <FilterBar filterValues={setFilterValues} filterFn={filter} />
      <CardsList catalog={catalog.slice(0, visibleItems)} />
      <LoadButton type="button" onClick={loadMoreItems}>
        Load more
      </LoadButton>
    </Container>
  );
}
