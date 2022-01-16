import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../ui/Navbar";
import { SearchScreen } from '../search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroeId" element={<HeroScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
      </div>
    </>
  );
};
