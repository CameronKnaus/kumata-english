import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PAGE_ROUTES } from './Constants/RouteConstants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import FormFactorContext from './Util/FormFactorContext';
import ParallaxCache from './Util/ParallaxCache';

ReactDOM.render(
    <React.StrictMode>
        <ParallaxProvider>
            <FormFactorContext>
                <ParallaxCache />
                <BrowserRouter>
                    <Routes>
                        <Route path={PAGE_ROUTES.landingPage} element={<LandingPage />} />
                    </Routes>
                </BrowserRouter>
            </FormFactorContext>
        </ParallaxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
