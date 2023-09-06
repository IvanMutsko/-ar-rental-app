import { useState, useEffect } from 'react';
import { fetchAPI } from '../../api/api';
import { CardsList } from '../../components/CardsList/CardsList';
import { Container, LoadButton } from './CatalogPage.styled';

export default function CatalogPage() {
  const [catalog, setCatalog] = useState([]);

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

  return (
    <Container>
      <CardsList catalog={catalog} />
      <LoadButton type="button">Load more</LoadButton>
    </Container>
  );
}
