import { Header } from "./Header";
import { LanguageProvider } from "./LanguageContext";

function App() {
    return (
        <LanguageProvider>
            <Header />
        </LanguageProvider>
    );
}

export default App;
