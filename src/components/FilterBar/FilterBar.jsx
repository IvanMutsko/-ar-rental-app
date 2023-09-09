import PropTypes from 'prop-types';
import { useState } from 'react';

import makes from '../../data/makes.json';
import priceRange from '../../data/price.json';
import icon from '../../images/sprite.svg';
import {
  Container,
  InputWrap,
  Label,
  Input,
  Select,
  SelectContainer,
  FilterButton,
} from './FilterBar.styled';

export const FilterBar = ({ filterValues, filterFn }) => {
  const [brandSelectOpen, setBrandSelectOpen] = useState(false);
  const [priceSelectOpen, setPriceSelectOpen] = useState(false);

  const filterData = e => {
    e.preventDefault();

    const { brand, price, mileage, endMileage } = e.target;

    const values = {
      make: brand.value,
      rentalPrice: Number(price.value.trim()),
      minMileage: Number(mileage.value.trim()),
      maxMileage: Number(endMileage.value.trim()),
    };

    filterValues(values);
  };

  const handleBrandSelectFocus = () => {
    setBrandSelectOpen(true);
  };

  const handleBrandSelectChange = () => {
    setBrandSelectOpen(false);
  };

  const handlePriceSelectFocus = () => {
    setPriceSelectOpen(true);
  };

  const handlePriceSelectChange = () => {
    setPriceSelectOpen(false);
  };

  return (
    <Container onSubmit={filterData}>
      <InputWrap>
        <Label htmlFor="brand">Car brand</Label>
        <SelectContainer>
          <Select
            id="brand"
            onFocus={handleBrandSelectFocus}
            onChange={handleBrandSelectChange}
          >
            {makes.map(make => (
              <option
                key={make}
                className="options-list"
                value={make !== 'All' ? make : ''}
              >
                {make}
              </option>
            ))}
          </Select>
          <svg className="icon">
            <use
              href={`${icon}${
                brandSelectOpen ? '#icon-chevron-top' : '#icon-chevron-down'
              }`}
            ></use>
          </svg>
        </SelectContainer>
      </InputWrap>
      <InputWrap>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <SelectContainer>
          <Select
            id="price"
            onFocus={handlePriceSelectFocus}
            onChange={handlePriceSelectChange}
          >
            {priceRange.map(value => (
              <option
                key={value}
                className="options-list"
                value={value !== '' ? value : ''}
              >
                To {value}$
              </option>
            ))}
          </Select>
          <svg className="icon">
            <use
              href={`${icon}${
                priceSelectOpen ? '#icon-chevron-top' : '#icon-chevron-down'
              }`}
            ></use>
          </svg>
        </SelectContainer>
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
