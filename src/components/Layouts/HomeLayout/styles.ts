import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;
`;

export const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #0a0a0a;
  cursor: pointer;

  &:hover {
    color: #047857;
  }

  .logo-icon {
    width: 36px;
    height: 32px;
    background: #0a0a0a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 0.5rem;
    font-size: 1.8rem;
    &:hover {
      background: #047857;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  color: #0a0a0a;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: #047857;
  }
`;

export const NavIcon = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    margin: 0;
  }

  &:hover {
    color: #047857;
  }
`;

export const LoginButton = styled.button`
  background: #0a0a0a;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #047857;
  }

  @media (max-width: 968px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #374151;
  padding: 0.5rem;

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;

  @media (min-width: 969px) {
    display: none;
  }
`;

export const MobileNavItem = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #374151;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9fafb;
    color: #2563eb;
  }

  &.active {
    color: #f59e0b;
    background: #fef3c7;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
