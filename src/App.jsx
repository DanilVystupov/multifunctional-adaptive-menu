// В этом файле определен корневой компонент приложения App. 
// Он использует React Router для определения маршрутов и рендеринга соответствующих компонентов. 
// Импортируются компоненты MainMenu, ServicesPage и CloudServicesDetails. 
// Компонент MainMenu отображается при переходе на маршрут MAIN_MENU, 
// ServicesPage отображается при переходе на маршрут SERVICES_PAGE с параметрами языка и 
// флагом isMenuOpen, а CloudServicesDetails отображается 
// при переходе на маршрут CLOUD_SERVICES_DETAILS с параметрами языка и флагом isMenuOpen. 
// Эти компоненты включены в маршрутизацию с помощью компонента Route.

import React from 'react';
import './styles.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CLOUD_SERVICES_DETAILS, MAIN_MENU, SERVICES_PAGE } from './paths/paths';
import MainMenu from './components/MainMenu/MainMenu';
import ServicesPage from './components/ServicesPage/ServicesPage';
import CloudServicesDetails from './components/ServicesPage/CloudServicesDetails/CloudServicesDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={MAIN_MENU} element={<MainMenu />} />
        <Route path={SERVICES_PAGE + ':language/:isMenuOpen'} element={<ServicesPage />} />
        <Route path={CLOUD_SERVICES_DETAILS + ':language/:isMenuOpen'} element={<CloudServicesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;