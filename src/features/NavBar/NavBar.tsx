import {
  IconBeach,
  IconBriefcase,
  IconBuilding,
  IconMenu2,
  IconPlane,
  IconShoppingBag,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Logo,
  MobileMenu,
  MobileMenuButton,
  MobileNavItem,
  NavbarContainer,
  NavbarContent,
  NavIcon,
  NavItem,
  NavLinks,
  RightSection,
} from './styles';

import CustomButton from '@/components/Atoms/Button/CustomButton';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Flight', icon: <IconPlane />, active: false },
    { label: 'Hotel', icon: <IconBuilding />, active: false },
    { label: 'Shop', icon: <IconShoppingBag />, active: false },
    { label: 'Holiday', icon: <IconBeach />, active: false },
    { label: 'Business Class', icon: <IconBriefcase />, active: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleNavigateToLogin = () => {
    navigate('/login');
  };
  const handleNavigateToSignUp = () => {
    navigate('/signup');
  };
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>
          <div className="logo-icon">GB</div>
          GoBouy
        </Logo>

        <NavLinks>
          {navItems.map((item, index) => (
            <NavItem key={index} className={item.active ? 'active' : ''}>
              <NavIcon>{item.icon}</NavIcon>
              {item.label}
            </NavItem>
          ))}
        </NavLinks>

        <RightSection>
          <CustomButton onClick={handleNavigateToLogin} type="primary">
            Login
          </CustomButton>
          <CustomButton onClick={handleNavigateToSignUp} type="primary">
            SignUp
          </CustomButton>
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </MobileMenuButton>
        </RightSection>
      </NavbarContent>

      <MobileMenu isOpen={isMobileMenuOpen}>
        {navItems.map((item, index) => (
          <MobileNavItem key={index} className={item.active ? 'active' : ''}>
            <NavIcon>{item.icon}</NavIcon>
            {item.label}
          </MobileNavItem>
        ))}
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
