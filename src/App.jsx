import HeaderSection from './Components/Sections/HeaderSection/HeaderSection';
import EducSection from './Components/Sections/EducSection/EducSection';
import PracticeSection from './Components/Sections/PracticeSection/PracticeSection';
import ContactSection from './Components/Sections/ContactSection/ContactSection';
import SocialMediaTile from './Components/Tiles/SocialMediaTile/SocialMediaTile';

import InfoSection from './Components/Sections/InfoSection/InfoSection';
import { useEffect, useState } from 'react';

import { ValidContext } from './contexts/validContext';

function App() {
    const [isValidated, setIsValidated] = useState(false);

    useEffect(() => {
        console.log(isValidated);
    }, [isValidated]);
    return (
        <>
            <ValidContext.Provider value={isValidated}>
                <HeaderSection />
                <main>
                    <PracticeSection />
                    <EducSection />
                    <ContactSection />
                </main>
                <footer>
                    <InfoSection />
                    {/* <SocialMediaTile /> */}
                    <button className="valid_btn" onClick={() => setIsValidated(!isValidated)}>
                        Validate Resume
                    </button>
                </footer>
            </ValidContext.Provider>
        </>
    );
}

export default App;
