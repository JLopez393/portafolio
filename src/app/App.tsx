import { useSelector } from 'react-redux';
import { Home, Layout, About, Experience } from './components';
import { Routes, Route } from 'react-router-dom';
import { getLenguaje } from '../features/lenguajeSlice';
import { esTranslations, enTranslations } from '../utils/lenguajes';

type Translations = {
  [key: string]: {
    [key: string]: string | string[];
  };
};

function App() {
  const currentLanguage = useSelector(getLenguaje);

  const translations: Translations = {
    en: enTranslations,
    es: esTranslations,
  };

  return (
    <Routes>
      <Route
        path='/portafolio'
        element={<Layout translations={translations[currentLanguage]} />}
      >
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='experience' element={<Experience />} />
        <Route path='' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
