export const fetchCatalog = async (
  setLoader,
  fetchAPI,
  setCatalog,
  setOriginalCatalog
) => {
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
