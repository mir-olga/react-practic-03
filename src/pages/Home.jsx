import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';

const Home = () => {
  const {countries, isLoading, error} = useFetchCountries();
//console.log (countries);

  return (
    <Section>
      <Container>
        {isLoading && <Loader/>}
        {error && <Heading title="Помилка" bottom />}
        {countries.length>0 && <CountryList countries={countries}/>}
      </Container>
    </Section>
  );
};

export default Home;
