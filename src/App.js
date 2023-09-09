import { useState, useEffect, useCallback } from 'react';
import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchAPI } from './api/api';
import { fetchCatalog } from './api/apiCalls';
import { filterLogic } from './helpers/filterLogic';
import { setLocalStorage } from 'helpers/setLocalStorage';

import { Layout } from './components/Layout/Layout';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  const [originalCatalog, setOriginalCatalog] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [visibleItems, setVisibleItems] = useState(1);
  const [filterValues, setFilterValues] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [loader, setLoader] = useState(false);

  setLocalStorage();

  useEffect(() => {
    fetchCatalog(setLoader, fetchAPI, setCatalog, setOriginalCatalog);
  }, []);

  const filter = useCallback(() => {
    const filteredArray = filterLogic(originalCatalog, filterValues);
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
