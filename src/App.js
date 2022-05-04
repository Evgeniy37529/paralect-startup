import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { InitPage } from './Pages/InitPAge';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Layout } from './Layout/Layout';
import { ResultPage } from './Pages/ResultPage';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { GlobalState } from './Context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ResultPage />} />
          </Route>
        </Routes>
        {/* <InitPage /> */}
      </div>
    </GlobalState>
  );
}

export default App;
