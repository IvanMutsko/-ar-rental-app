import { useState, useEffect } from 'react';
import { fetchAPI } from '../api/api';
import { CardsList } from '../components/CardsList/CardsList';

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
    <>
      <h1>CatalogPage</h1>
      <CardsList catalog={catalog} />
    </>
  );
}
