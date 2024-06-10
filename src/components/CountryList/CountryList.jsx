import { Grid, GridItem } from ".."

export const CountryList = ({countries}) => {
  return <Grid> 
    {countries.map(({id,country, flag})=>(<GridItem key={id}> 
      <img src={flag} alt={country}/>
      <h1>{country}</h1>
    </GridItem>))}
    </Grid>;
};
