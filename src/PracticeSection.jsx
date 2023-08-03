// eslint-disable-next-line no-unused-vars
import React from 'react';

import PracticeTile from './Components/PracticeTile';
import SectionComponent from './Components/SectionComponent';

import '../src/CSS/EducSection.css';

const PracticeSection = () => {
    return (
        <SectionComponent
            TileComponent={PracticeTile}
            sectionId="PracticeSection"
            sectionClass="practice-section"
        />
    );
};

export default PracticeSection;
