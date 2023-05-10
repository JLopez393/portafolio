import React from 'react';
import '../../styles/css';
import { Navbar, Home } from '../';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import { TranslationProvider } from '../../../context/translationsContext';

export default function Layout({ translations }: any) {
  return (
    <>
      <TranslationProvider translations={translations}>
        <main>
          <div className='header'>
            <Navbar translations={translations} />
          </div>
          <div className='content'>
            <Outlet context={translations} />
          </div>
          <div className='footer'>
            <Footer translations={translations} />
          </div>
        </main>
      </TranslationProvider>
      {/* <Navbar translations={translations} />
      <Home translations={translations} />
      <Footer translations={translations} /> */}
    </>
  );
}
