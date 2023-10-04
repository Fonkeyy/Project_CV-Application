import '../src/CSS/HeaderSection.css';
import '../src/App.css';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import ProfilePicture from './Components/ProfilePicture/ProfilePicture';

function HeaderSection() {
    return (
        <div id="Header">
            <HeaderComponent
                id="full-name"
                className="header-form Form-component"
                inputClassName="input-text"
                placeholder="Full Name"
            />
            <HeaderComponent
                id="title"
                className="header-form Form-component"
                inputClassName="input-text"
                placeholder="Title"
            />
            <ProfilePicture />
        </div>
    );
}

export default HeaderSection;
