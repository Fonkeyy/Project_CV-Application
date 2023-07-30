// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../src/CSS/Practice-section.css';
import PracticeTile from './Components/PracticeTile';
import Button from './Components/Button';

const PracticeSection = () => {
    // // const [practiceTiles, setPracticeTiles] = useState([PracticeTile]);
    const [needAddBtn, setNeedAddBtn] = useState(false);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    const handleAddClick = () => {
        return <PracticeTile onSubmit={handleOnChildSubmit} />;
    };

    return (
        <>
            {needAddBtn ? (
                <Button className="add-btn" onClick={handleAddClick} />
            ) : (
                <PracticeTile onSubmit={handleOnChildSubmit} />
            )}
        </>
    );
};

export default PracticeSection;
