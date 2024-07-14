import {FC, useState} from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import PlanetSite from './components/PlanetCard/PlanetCard';
import Page404 from './components/Page404/Page404';

const App: FC = () => {
  const [isPanelExpand, setPanelAppear] = useState(false);
  return (
    <>
    <Routes>
          <Route
            path="/"
            element={
              <MainPage isPanelExpand={isPanelExpand} setPanelAppear={setPanelAppear} />
            }
          >
            <Route
              path="/detail/:id"
              element={<PlanetSite setPanelAppear={setPanelAppear} />}
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
     
    </>
  );
}
export default App;
