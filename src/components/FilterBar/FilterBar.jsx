import PropTypes from 'prop-types';
import makes from '../../data/makes.json';
import {
  Container,
  InputWrap,
  Label,
  Input,
  Select,
  FilterButton,
} from './FilterBar.styled';

export const FilterBar = ({ filterValues, filterFn }) => {
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

  return (
    <Container onSubmit={filterData}>
      <InputWrap>
        <Label htmlFor="brand">Car brand</Label>

        <Select id="brand">
          {makes.map(make => (
            <option key={make} value={make !== 'All' ? make : ''}>
              {make}
            </option>
          ))}
        </Select>
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
