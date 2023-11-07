import { createContext, useState } from "react";

const LanguageContext = createContext();

const defaultLanguage = "en";
const translations = {
    en: {
        headerTitle: "This is my header!",
        headerParagraph: "And this is my paragraph, broski.",
    },
    es: {
        headerTitle: "Este es mi cabezero!",
        headerParagraph: "Y este es mi parrafo, hermano.",
    },
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(defaultLanguage);
    const [texts, setTexts] = useState(translations[language]);
    const handleLanguage = (e) => {
        if (e.target.value === "en") {
            setLanguage("en");
            setTexts(translations.en);
        } else {
            setLanguage("es");
            setTexts(translations.es);
        }
    };

    const data = { texts, handleLanguage };
    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageProvider };

export default LanguageContext;
