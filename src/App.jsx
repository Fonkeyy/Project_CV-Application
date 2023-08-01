// import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import HeaderSection from './HeaderSection';
import EducSection from './EducSection';
import PracticeSection from './PracticeSection';
import ContactSection from './ContactSection';

import '../src/CSS/App.css';

function App() {
    return (
        <div className="App">
            <HeaderSection />
            <PracticeSection />
            <EducSection />
            <ContactSection />
        </div>
    );
}

export default App;
