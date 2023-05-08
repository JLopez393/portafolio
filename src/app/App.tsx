import { useSelector } from "react-redux";
import { Layout } from "./components";
import { getLenguaje } from "../features/lenguajeSlice";
import { esTranslations, enTranslations } from "../utils/lenguajes";
// import {Home} from "./pages";

type Translations = {
  [key: string]: {
    [key: string]: string | string[];
  };
};

function App() {
  const currentLanguage = useSelector(getLenguaje);

  const translations: Translations  = {
    en: enTranslations,
    es: esTranslations
  };

  return <Layout translations={translations[currentLanguage]}/>
}

export default App;
