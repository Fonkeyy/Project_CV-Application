// eslint-disable-next-line no-unused-vars
import React from 'react';

import EducTile from './Components/EducTile/EducTile';
import SectionComponent from './Components/SectionComponent/SectionComponent';

import '../src/CSS/EducSection.css';

const EducSection = () => {
    return <SectionComponent TileComponent={EducTile} sectionId="EducSection" sectionClass="educ-section" />;
};

export default EducSection;
