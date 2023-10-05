import PracticeTile from '../../Tiles/PracticeTile/PracticeTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import '../Section.css';

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
