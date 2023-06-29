import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CLOUD_COMPUTING_INFO, MAIN_MENU, SERVICES_PAGE } from './paths/paths';
import MainMenu from './components/MainMenu/MainMenu';
import ServicesPage from './components/ServicesPage/ServicesPage';
import CloudServicesDetails from './components/ServicesPage/CloudServicesDetails/CloudServicesDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={MAIN_MENU} element={<MainMenu />} />
        <Route path={SERVICES_PAGE + ':language/:isMenuOpen'} element={<ServicesPage />} />
        <Route path={CLOUD_COMPUTING_INFO + ':language/:isMenuOpen'} element={<CloudServicesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
