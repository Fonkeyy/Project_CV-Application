import EducTile from '../../Tiles/EducTile/EducTile';
import SectionComponent from '../SectionComponent/SectionComponent';

import './EducSection.css';

const EducSection = () => {
    return (
        <div className="section">
            <h2>Education</h2>
            <SectionComponent TileComponent={EducTile} sectionId="EducSection" sectionClass="educ-section" />
        </div>
    );
};

export default EducSection;
