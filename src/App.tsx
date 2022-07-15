import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import DetailPage from './pages/DetailPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/result" element={<ResultPage />} />
					<Route path="/detail" element={<DetailPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
