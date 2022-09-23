import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { MainContainer } from './StyledComponents';
import HamburgerMenu from '../HamburgerMenu';
import { HamburgerContainer } from './StyledComponents';

export default function HeaderFooter() {

    const { theme } = useContext(ThemeContext);

return (
    <>
    <MainContainer>
        <AppHeader />
        <Outlet />
        <AppFooter />
    </MainContainer>

    </>
);

};