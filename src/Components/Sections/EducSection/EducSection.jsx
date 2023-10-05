import EducTile from '../../Tiles/EducTile/EducTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import './EducSection.css';

const EducSection = () => {
    return (
        <section>
            <h2>Education</h2>
            <SectionComponent TileComponent={EducTile} />
        </section>
    );
};

export default EducSection;
