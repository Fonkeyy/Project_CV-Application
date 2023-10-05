import PracticeTile from '../../Tiles/PracticeTile/PracticeTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import '../../../index.css';

const PracticeSection = () => {
    return (
        <section>
            <h2>Professional Experience</h2>
            <SectionComponent TileComponent={PracticeTile} />
        </section>
    );
};

export default PracticeSection;
