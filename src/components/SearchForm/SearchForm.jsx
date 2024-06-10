import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import styles from "./SearchForm.module.css";

const regions = [
   { id: 'africa', value: 'africa', name: 'Africa' },
   { id: 'americas', value: 'americas', name: 'America' },
   { id: 'asia', value: 'asia', name: 'Asia' },
   { id: 'europe', value: 'europe', name: 'Europe' },
   { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    e.target.reset();
  };

  return (
  <form className={styles.form} onSubmit={handleSubmit}>
  <button className={styles.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <select
    aria-label="select"
    className={styles.select}
    name="region"
    required
    defaultValue="default"
    onChange={e => setQuery(e.target.value)}
  >
    <option disabled value="default">
      Select a region
    </option>
    
    {regions.map(({ id, value, name }) => (
          <option key={id} value={value}>
            {name}</option>
            ))}
  </select>
</form>)
};
