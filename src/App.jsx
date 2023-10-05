import HeaderSection from './Components/Sections/HeaderSection/HeaderSection';
import EducSection from './Components/Sections/EducSection/EducSection';
import PracticeSection from './Components/Sections/PracticeSection/PracticeSection';
import ContactSection from './Components/Sections/ContactSection/ContactSection';
import SocialMediaTile from './Components/Tiles/SocialMediaTile/SocialMediaTile';

import '../src/App.css';

function App() {
    return (
        <div className="App">
            <HeaderSection />
            <PracticeSection />
            <EducSection />
            <ContactSection />
            <SocialMediaTile />
        </div>
    );
}

export default App;
