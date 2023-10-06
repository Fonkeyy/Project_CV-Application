import HeaderSection from './Components/Sections/HeaderSection/HeaderSection';
import EducSection from './Components/Sections/EducSection/EducSection';
import PracticeSection from './Components/Sections/PracticeSection/PracticeSection';
import ContactSection from './Components/Sections/ContactSection/ContactSection';
import SocialMediaTile from './Components/Tiles/SocialMediaTile/SocialMediaTile';

import '../src/App.css';
import InfoSection from './Components/Sections/InfoSection/InfoSection';

function App() {
    return (
        <>
            <HeaderSection />
            <main>
                <PracticeSection />
                <EducSection />
                <ContactSection />
            </main>
            <footer>
                <InfoSection />
                <SocialMediaTile />
            </footer>
        </>
    );
}

export default App;
