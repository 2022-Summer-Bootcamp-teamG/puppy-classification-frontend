import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import DetailPage from './pages/DetailPage';
import NotFound from './components/common/NotFound';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route element={<NotFound />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
