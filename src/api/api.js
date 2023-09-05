import axios from 'axios';

const API_URL = 'https://646a0c4303bb12ac2098990a.mockapi.io/contacts/cars';

export const fetchAPI = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
