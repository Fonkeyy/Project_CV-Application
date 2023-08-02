// import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import HeaderSection from './HeaderSection';
import EducSection from './EducSection';
import PracticeSection from './PracticeSection';
import ContactSection from './ContactSection';

import '../src/CSS/App.css';
import SocialMediaTile from './Components/SocialMediaTile';

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
