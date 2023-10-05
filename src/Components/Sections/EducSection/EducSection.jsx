// eslint-disable-next-line no-unused-vars
import React from 'react';

import EducTile from '../../Tiles/EducTile/EducTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import './EducSection.css';

const EducSection = () => {
    return <SectionComponent TileComponent={EducTile} sectionId="EducSection" sectionClass="educ-section" />;
};

export default EducSection;
