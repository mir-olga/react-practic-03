import { Container, CountryList, Loader, SearchForm, Section } from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/countryApi';

const SearchCountry = () => {

  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (query) => {
    setSearchValue(query);
  }

  useEffect(() => {
    if (searchValue === '') return;
    setLoading(true);

    const getData = async () => {
      try {
        const data = await fetchByRegion(searchValue);
        setCountries(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchValue]);
  
  console.log(countries);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <p>Error {error}</p>}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
