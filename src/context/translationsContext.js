import React, { createContext } from 'react';

// Crea el contexto de traducción
const TranslationContext = createContext();

// Componente proveedor del contexto
export function TranslationProvider({ translations, children }) {

  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
}

export default TranslationContext;