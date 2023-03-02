// react components
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Personnages from './pages/personnages';
import FichePerso from './pages/fichePerso';
import Home from './pages/home';
import Histoire from './pages/histoire';
import Lieux from './pages/lieu';

// styles
import './styles/globalstyle.module.scss';

// fonts
import 'typeface-quicksand';
import 'typeface-handlee';

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/evilkingdomohfot/" element={<Home />} />
            <Route
               path="/evilkingdomohfot/personnages"
               element={<Personnages />}
            />
            <Route
               path="/evilkingdomohfot/personnage/:id"
               element={<FichePerso />}
            />
            <Route path="/evilkingdomohfot/histoire" element={<Histoire />} />
            <Route path="/evilkingdomohfot/lieux" element={<Lieux />} />
            <Route path="/evilkingdomohfot/info" />
         </Routes>
         <Footer />
      </BrowserRouter>
   </React.StrictMode>
);
