import React from 'react';
import { Navbar, Home } from '../';

export default function Layout({ translations }: any) {
  return (
    <>
      <Navbar translations={translations} />
      <Home translations={translations} />
    </>
  );
}
