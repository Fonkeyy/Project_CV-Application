import HeaderSection from './Components/HeaderSection/HeaderSection';
import EducSection from './EducSection';
import PracticeSection from './Components/PracticeSection/PracticeSection';
import ContactSection from './ContactSection';
import SocialMediaTile from './Components/SocialMediaTile/SocialMediaTile';

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
