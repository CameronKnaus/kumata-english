import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { PAGE_ROUTES } from './Constants/RouteConstants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import FormFactorContext from './Util/FormFactorContext';
import ParallaxCache from './Util/ParallaxCache';
import AboutMe from './Components/AboutMe/AboutMe';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <FormFactorContext>
        <ParallaxCache />
        <BrowserRouter>
          <Routes>
            <Route path={PAGE_ROUTES.landingPage} element={<LandingPage />}>
              <Route path={PAGE_ROUTES.aboutMe} element={<AboutMe />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FormFactorContext>
    </ParallaxProvider>
  </React.StrictMode>
);
