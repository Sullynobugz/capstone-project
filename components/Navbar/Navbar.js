import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleImplementationClick = () => {
    router.push("/implementation");
  };

  const handleAddHabitsClick = () => {
    router.push("/addhabits");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Container>
      <MenuButton onClick={toggleDropdown}>
        Menu {showDropdown ? "▲" : "▼"}
      </MenuButton>
      <DropdownContainer showDropdown={showDropdown}>
        <DropdownLinks>
          <div onClick={handleAddHabitsClick}>
            <DropdownLink>Add Habits</DropdownLink>
          </div>
          <div onClick={handleImplementationClick}>
            <DropdownLink>Implementation</DropdownLink>
          </div>
          {/* Additional links here */}
        </DropdownLinks>
      </DropdownContainer>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  background-color: #2c2c2c;
  border-bottom: 1px solid #444;
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: #f5f5f5; /* Helle Schriftfarbe */
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  display: ${(props) => (props.showDropdown ? "block" : "none")};

  @media (min-width: 768px) {
    position: static !important;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    border: none;
    box-shadow: none;
  }
`;

const DropdownLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const DropdownLink = styled.a`
  cursor: pointer;
  padding: 5px;
  text-decoration: none;
  display: block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  border-radius: 3px;
  margin-bottom: 8px;
  font-size: 1.2rem;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 16px;
    padding: 10px 16px;
    font-size: 1rem;
  }
`;

export default Navbar;
