export const filterLogic = (originalCatalog, filterValues) => {
  let filteredArray = [...originalCatalog];

  if (Object.keys(filterValues).length !== 0) {
    if (filterValues.make !== '') {
      filteredArray = filteredArray.filter(
        item => item?.make?.toLowerCase() === filterValues?.make?.toLowerCase()
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

  return filteredArray;
};
