import { useEffect } from 'react';
import './App.css';
import { InitPage } from './Pages/InitPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Layout } from './Layout/Layout';
import { ResultPage } from './Pages/ResultPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { GlobalState } from './Context/GlobalState';

function App() {
  const navigate = useNavigate();
  useEffect(() => navigate('/'), []);
  return (
    <GlobalState>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InitPage />} />
            <Route path="/results" element={<ResultPage />} />
            <Route path="/notFoundResults" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </GlobalState>
  );
}

export default App;
