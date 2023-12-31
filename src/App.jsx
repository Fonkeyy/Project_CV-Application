import HeaderSection from './Components/Sections/HeaderSection/HeaderSection';
import EducSection from './Components/Sections/EducSection/EducSection';
import PracticeSection from './Components/Sections/PracticeSection/PracticeSection';
import ContactSection from './Components/Sections/ContactSection/ContactSection';
import SocialMediaTile from './Components/Tiles/SocialMediaTile/SocialMediaTile';

import InfoSection from './Components/Sections/InfoSection/InfoSection';
import ValidateBtn from './Components/ValidateBtn';
import { ValidProvider } from './contexts/validContext';

function App() {
    return (
        <>
            <ValidProvider>
                <HeaderSection />
                <main>
                    <PracticeSection />
                    <EducSection />
                    <ContactSection />
                </main>
                <footer>
                    <InfoSection />
                    <SocialMediaTile />
                    <ValidateBtn />
                </footer>
            </ValidProvider>
        </>
    );
}

export default App;
