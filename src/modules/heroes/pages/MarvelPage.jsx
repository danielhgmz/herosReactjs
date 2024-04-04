import { HeroList } from '../components';

export const MarvelPage = () => {
  const titulo = 'Marvel Comics';
  return (
    <>
      <h1>Marvel</h1>
      <hr></hr>
      <HeroList publisher={titulo} />
    </>
  );
};
