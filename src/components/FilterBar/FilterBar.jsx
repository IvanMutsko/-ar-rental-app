import PropTypes from 'prop-types';

import {
  Container,
  InputWrap,
  Label,
  Input,
  FilterButton,
} from './FilterBar.styled';

export const FilterBar = ({ filterValues, filterFn }) => {
  const filterData = e => {
    e.preventDefault();

    const { brand, price, mileage, endMileage } = e.target;

    const values = {
      make: brand.value.toLocaleLowerCase().trim(),
      rentalPrice: Number(price.value.trim()),
      minMileage: Number(mileage.value.trim()),
      maxMileage: Number(endMileage.value.trim()),
    };

    filterValues(values);
  };

  return (
    <Container onSubmit={filterData}>
      <InputWrap>
        <Label htmlFor="brand">Car brand</Label>
        <Input type="text" id="brand" placeholder="Enter the text" />
      </InputWrap>
      <InputWrap>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <Input type="text" id="price" placeholder="To $" />
      </InputWrap>
      <InputWrap>
        <Label htmlFor="mileage">Сar mileage / km</Label>
        <div className="range-wrap">
          <Input type="text" id="mileage" placeholder="From" />
          <Input type="text" id="endMileage" placeholder="To" />
        </div>
      </InputWrap>
      <FilterButton>Search</FilterButton>
    </Container>
  );
};

FilterBar.propTypes = {
  filterValues: PropTypes.func.isRequired,
  filterFn: PropTypes.func.isRequired,
};
