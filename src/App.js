import { useState, useEffect, useCallback } from 'react';
import { fetchAPI } from './api/api';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { Loader } from 'components/Loader/Loader';

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
  const [loader, setLoader] = useState(false);

  const favoriteCarsString = localStorage.getItem('favoriteCars');

  if (!favoriteCarsString) {
    localStorage.setItem('favoriteCars', JSON.stringify([]));
  }

  const fetchCatalog = async () => {
    try {
      setLoader(true);
      const fetchedCars = await fetchAPI();

      setCatalog(fetchedCars);
      setOriginalCatalog(fetchedCars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  const filter = useCallback(() => {
    let filteredArray = [...originalCatalog];

    if (Object.keys(filterValues).length !== 0) {
      if (filterValues.make !== '') {
        filteredArray = filteredArray.filter(
          item =>
            item?.make?.toLowerCase() === filterValues?.make?.toLowerCase()
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
    }

    setCatalog(filteredArray);
    setVisibleItems(8);
  }, [filterValues, originalCatalog]);

  useEffect(() => {
    filter();
  }, [filter]);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 8);
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  return loader ? (
    <Loader />
  ) : (
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
