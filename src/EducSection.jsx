// eslint-disable-next-line no-unused-vars
import React from 'react';
import EducTile from './Components/EducTile';
import AddMoreBtn from './Components/AddMoreBtn';

import '../src/CSS/Educ-section.css';

function EducSection() {
    return (
        <div id="Educ-section">
            <EducTile />
            <AddMoreBtn />
        </div>
    );
}

export default EducSection;
