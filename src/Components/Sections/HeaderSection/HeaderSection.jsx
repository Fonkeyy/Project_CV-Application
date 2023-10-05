import HeaderComponent from '../../HeaderComponent/HeaderComponent';
import ProfilePicture from '../../ProfilePicture/ProfilePicture';

import '../../../App.css';
import styles from './HeaderSection.module.css';

const HeaderSection = () => {
    return (
        <header>
            <div className={styles.header_content}>
                <HeaderComponent
                    id="full_name"
                    inputClassName={`${styles.input_text} ${styles.full_name}`}
                    placeholder="John Doe"
                />
                <HeaderComponent
                    id="title"
                    inputClassName={`${styles.input_text} ${styles.title}`}
                    placeholder="Web Developer"
                />
            </div>
            <ProfilePicture />
        </header>
    );
};

export default HeaderSection;
