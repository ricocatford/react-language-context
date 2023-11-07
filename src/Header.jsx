import { useContext } from "react";
import LanguageContext from "./LanguageContext";

export const Header = () => {
    const { texts, handleLanguage } = useContext(LanguageContext);
    return (
        <>
            <h1>{texts.headerTitle}</h1>
            <p>{texts.headerParagraph}</p>
            <select name="language" onChange={handleLanguage}>
                <option value="en">EN</option>
                <option value="es">ES</option>
            </select>
        </>
    );
};
