// eslint-disable-next-line no-unused-vars
import React from 'react';
import PracticeTile from './Components/PracticeTile';
import AddMoreBtn from './Components/AddMoreBtn';

import '../src/CSS/Practice-section.css';

function PracticeSection() {
    return (
        <div id="Practice-section">
            <PracticeTile />
            <AddMoreBtn />
        </div>
    );
}

export default PracticeSection;
