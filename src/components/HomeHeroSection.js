import { NavLink } from 'react-router-dom';
import { HeroSection } from './StyledComponents';
import { HeroImage } from './StyledComponents';
import { HeroText } from './StyledComponents';


export default function HomeHeroSection() {


    function noHoverStyling(e) {
        e.target.style.color = "rgba(0, 0, 0, 0.6)";
    };

    function hoverStyling(e) {
        e.target.style.color = "rgba(255, 255, 255, 0.6";
    };


    return (
    <>
        <HeroSection>
            <NavLink to="/Shop">
                <HeroText path='/Shop' onMouseOver={hoverStyling} onMouseLeave={noHoverStyling}>BROTHER RYAN SHOP</HeroText>
            </NavLink>
            <HeroImage/>
        </HeroSection>
    </>
    );
};