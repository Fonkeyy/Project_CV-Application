import PracticeTile from '../PracticeTile/PracticeTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import './PracticeSection.css';

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
