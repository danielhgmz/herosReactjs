import { HeroList } from '../components';

export const DcPages = () => {
  const culo = 'DC Comics';
  return (
    <>
      <h1>DC</h1>
      <hr></hr>
      <HeroList publisher={culo} />
    </>
  );
};
