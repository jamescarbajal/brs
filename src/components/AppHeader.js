// import { ThemeToggle } from './ThemeToggle';
import NavBarLinks from './NavBarLinks';
import AnnouncementsBar from './AnnouncementsBar'
import { NavBarContainer } from './StyledComponents';

export default function AppHeader() {


    return (
        <>  
            <AnnouncementsBar />
            <NavBarContainer>
                <NavBarLinks />
            </NavBarContainer>
        </>
    );
};