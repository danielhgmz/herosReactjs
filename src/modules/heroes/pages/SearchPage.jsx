import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = event => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPages</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div
            className='alert alert-primary animate__shakeX'
            style={{
              animationDuration: '2s',
              display: showSearch ? '' : 'none'
            }}
          >
            Search a Hero
          </div>
          <div
            className='alert alert-danger animate__shakeX'
            style={{
              animationDuration: '2s',
              display: showError ? '' : 'none'
            }}
          >
            No Hero with {q}
          </div>

          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
