// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../src/CSS/Practice-section.css';
import PracticeTile from './Components/PracticeTile';
import Button from './Components/Button';

import { v4 as uuidv4 } from 'uuid';

const PracticeSection = () => {
    // // const [practiceTiles, setPracticeTiles] = useState([PracticeTile]);
    const [practiceTiles, setPracticeTiles] = useState([]);
    const [needAddBtn, setNeedAddBtn] = useState(false);

    const handleOnChildSubmit = (value) => {
        setNeedAddBtn(value);
    };

    const handleAddClick = () => {
        setPracticeTiles([...practiceTiles, <PracticeTile key={uuidv4()} onSubmit={handleOnChildSubmit} />]);
        setNeedAddBtn(false);
    };

    if (practiceTiles.length === 0) {
        setPracticeTiles([<PracticeTile key={uuidv4()} onSubmit={handleOnChildSubmit} />]);
    }

    return (
        <>
            {practiceTiles.map((practiceTile) => {
                return <div key={practiceTile.key}>{practiceTile}</div>;
            })}
            {needAddBtn && <Button className="add-btn" onClick={handleAddClick} />}
        </>
    );
};

export default PracticeSection;

// // <>
// //     {needAddBtn ? (
// //         <Button className="add-btn" onClick={handleAddClick} />
// //     ) : (
// //         <PracticeTile onSubmit={handleOnChildSubmit} />
// //     )}
// // </>
