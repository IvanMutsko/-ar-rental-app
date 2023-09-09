import { useState, useEffect } from 'react';
import { fetchAPI } from './api/api';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { ModalWindow } from './components/ModalWindow/ModalWindow';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const [originalCatalog, setOriginalCatalog] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);
  const [filterValues, setFilterValues] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  const favoriteCarsString = localStorage.getItem('favoriteCars');

  if (!favoriteCarsString) {
    localStorage.setItem('favoriteCars', JSON.stringify([]));
  }

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

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                setFilterValues={setFilterValues}
                filter={filter}
                catalog={catalog}
                visibleItems={visibleItems}
                loadMoreItems={loadMoreItems}
                toggleModal={toggleModal}
                setCurrentCar={setCurrentCar}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                setFilterValues={setFilterValues}
                filter={filter}
                catalog={catalog}
                visibleItems={visibleItems}
                loadMoreItems={loadMoreItems}
                toggleModal={toggleModal}
                setCurrentCar={setCurrentCar}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {modalShow && (
        <ModalWindow
          toggleModal={toggleModal}
          currentCar={currentCar}
        ></ModalWindow>
      )}
    </>
  );
}

export default App;
