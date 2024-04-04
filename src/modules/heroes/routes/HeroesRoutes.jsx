import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPages, MarvelPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />}></Route>
          <Route path='dc' element={<DcPages />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<HeroPage />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
