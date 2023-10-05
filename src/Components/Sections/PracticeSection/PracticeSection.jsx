import PracticeTile from '../../Tiles/PracticeTile/PracticeTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import '../Section.css';

const PracticeSection = () => {
    return (
        <div className="section">
            <h2>Professional Experience</h2>
            <SectionComponent
                TileComponent={PracticeTile}
                sectionId="PracticeSection"
                sectionClass="practice-section"
            />
        </div>
    );
};

export default PracticeSection;
