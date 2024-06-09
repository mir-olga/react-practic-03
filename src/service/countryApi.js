import axios from 'axios';
import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://countryapi.io/api/';
axios.defaults.headers.common.Authorization = ` Bearer NmV6eKUkvCV1Sfg3v3BVuv7m3x7iayViw14I994t`;

export const getCountries = async () => {
  const { data } = await axios.get('/all');
  const countries = transformCountriesData(Object.values(data));

  return countries;
};

export const fetchCountry = async id => {
  const { data } = await axios.get(`/name/${id}`);
  const country = transformCountryData(Object.values(data));

  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(Object.values(data));

  return countries;
};
