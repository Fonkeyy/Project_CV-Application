// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PracticeTile from './Components/PracticeTile';

import '../src/CSS/Practice-section.css';

function PracticeSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmitted = (value) => {
        setIsSubmitted(value);
    };
    return (
        <div id="Practice-section" className={isSubmitted ? 'submitted' : 'not-submitted'}>
            <PracticeTile isSubmitted={isSubmitted} onAddBtnClick={handleSubmitted} />
        </div>
    );
}

export default PracticeSection;
