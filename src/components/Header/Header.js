import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavTextPrincipal>Sale</NavTextPrincipal>
            <NavTextHover aria-hidden={true}>Sale</NavTextHover>
          </NavLink>
          <NavLink href="/new">
            <NavTextPrincipal>New&nbsp;Releases</NavTextPrincipal>
            <NavTextHover aria-hidden={true}>New&nbsp;Releases</NavTextHover>
          </NavLink>
          <NavLink href="/men">
            <NavTextPrincipal>Men</NavTextPrincipal>
            <NavTextHover aria-hidden={true}>Men</NavTextHover>
          </NavLink>
          <NavLink href="/women">
            <NavTextPrincipal>Women</NavTextPrincipal>
            <NavTextHover aria-hidden={true}>Women</NavTextHover>
          </NavLink>
          <NavLink href="/kids">
            <NavTextPrincipal>Kids</NavTextPrincipal>
            <NavTextHover aria-hidden={true}>Kids</NavTextHover>
          </NavLink>
          <NavLink href="/collections">
            <NavTextPrincipal>Collections</NavTextPrincipal>
            <NavTextHover aria-hidden={true}  >Collections</NavTextHover>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  opacity: 1;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavText = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 0.5s ease-in-out;

  @media (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
    transform: translateY(var(--translate-to));
    transition: transform 0.25s ease-in-out;
  } 
  }
`;

const NavTextPrincipal = styled(NavText)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const NavTextHover = styled(NavText)`
  position: absolute;
  left: 0;
  top: 0;
  --translate-from: 100%;
  --translate-to: 0%;
  font-weight: ${WEIGHTS.bold};
`;



export default Header;
