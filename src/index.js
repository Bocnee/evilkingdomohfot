// react components
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import Personnages from './pages/personnages';
import Home from './pages/home';
import Histoire from './pages/histoire';
import Lieux from './pages/lieu';

// styles
import GlobalStyle from './utils/styles/GlobalStyle';

// fonts
import 'typeface-quicksand';
import 'typeface-handlee';

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter>
         <GlobalStyle />
         <Header />
         <Routes>
            <Route path="/evilkingdomohfot/" element={<Home />} />
            <Route
               path="/evilkingdomohfot/personnages"
               element={<Personnages />}
            />
            <Route path="/evilkingdomohfot/histoire" element={<Histoire />} />
            <Route path="/evilkingdomohfot/lieux" element={<Lieux />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
